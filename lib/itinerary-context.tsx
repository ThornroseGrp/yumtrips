"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { type Day, type Activity } from "./itinerary-data";
import { isWithinInterval, parseISO, format } from "date-fns";
import { getTrip } from './trips';
import { getTheme, type ThemeConfig } from './theme-system';

// Dynamic imports for trip itineraries
const tripItineraries: Record<string, () => Promise<{ default: Day[] }>> = {
  'oki25': () => import('./trips/oki25/itinerary').then(m => ({ default: m.itineraryData })),
  'charleston25': () => import('./trips/charleston25/itinerary').then(m => ({ default: m.charleston25Itinerary }))
};

interface ItineraryContextType {
  days: Day[];
  currentDay: Day | null;
  currentActivity: Activity | null;
  selectedDayId: string;
  setSelectedDayId: (dayId: string) => void;
  getCurrentActivity: () => Activity | null;
  tripId: string;
  isLoading: boolean;
  theme: ThemeConfig | null;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

export function useItinerary() {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error("useItinerary must be used within an ItineraryProvider");
  }
  return context;
}

export function ItineraryProvider({ children, tripId }: { children: React.ReactNode; tripId: string }) {
  const [selectedDayId, setSelectedDayId] = useState<string>("friday");
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const [itineraryData, setItineraryData] = useState<Day[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeConfig | null>(null);

  // Load trip-specific itinerary data and theme
  useEffect(() => {
    const loadItinerary = async () => {
      setIsLoading(true);
      try {
        // Load trip config and theme
        const tripConfig = getTrip(tripId);
        if (tripConfig) {
          const tripTheme = getTheme(tripConfig.themeId || 'ocean');
          setTheme(tripTheme);
          
          // Apply theme to document
          document.documentElement.setAttribute('data-theme', tripConfig.themeId || 'ocean');
        }
        
        // Load itinerary
        const loader = tripItineraries[tripId];
        if (loader) {
          const module = await loader();
          setItineraryData(module.default);
        }
      } catch (error) {
        console.error('Failed to load itinerary:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadItinerary();
  }, [tripId]);

  const getCurrentActivity = () => {
    const now = new Date();
    const currentTime = format(now, "HH:mm");
    
    // Find today's schedule
    const today = itineraryData.find(day => {
      const dayDate = parseISO(day.date);
      return format(dayDate, "yyyy-MM-dd") === format(now, "yyyy-MM-dd");
    });

    if (!today) return null;

    // Find current activity based on time
    let current: Activity | null = null;
    
    for (let i = 0; i < today.activities.length; i++) {
      const activity = today.activities[i];
      const nextActivity = today.activities[i + 1];
      
      if (currentTime >= activity.time && (!nextActivity || currentTime < nextActivity.time)) {
        current = activity;
        break;
      }
    }

    return current;
  };

  useEffect(() => {
    if (itineraryData.length === 0) return;

    // Update current activity every minute
    const updateCurrentActivity = () => {
      setCurrentActivity(getCurrentActivity());
    };

    updateCurrentActivity();
    const interval = setInterval(updateCurrentActivity, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [itineraryData]);

  const currentDay = itineraryData.find(day => day.id === selectedDayId) || null;

  return (
    <ItineraryContext.Provider
      value={{
        days: itineraryData,
        currentDay,
        currentActivity,
        selectedDayId,
        setSelectedDayId,
        getCurrentActivity,
        tripId,
        isLoading,
        theme
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
}
