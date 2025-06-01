"use client";

import { useParams, useRouter } from 'next/navigation';
import { getTrip } from '@/lib/trips';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { Sun, Waves, Palmtree, TreePine, Building, Shell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Import trip data for getting attendees
import { itineraryData as oki25Data } from '@/lib/trips/oki25/itinerary';
import { charleston25Itinerary as charleston25Data } from '@/lib/trips/charleston25/itinerary';

const tripData: Record<string, any[]> = {
  'oki25': oki25Data,
  'charleston25': charleston25Data
};

export default function TripHomePage() {
  const params = useParams();
  const router = useRouter();
  const tripId = params.tripId as string;
  const [trip, setTrip] = useState(getTrip(tripId));
  const itinerary = tripData[tripId] || [];

  useEffect(() => {
    const tripData = getTrip(tripId);
    if (!tripData) {
      notFound();
    }
    setTrip(tripData);
    
    // Update theme colors based on trip
    if (tripData && tripData.theme) {
      document.documentElement.style.setProperty('--trip-primary', tripData.theme.primary);
      document.documentElement.style.setProperty('--trip-secondary', tripData.theme.secondary);
      document.documentElement.style.setProperty('--trip-accent', tripData.theme.accent);
    }
  }, [tripId]);

  if (!trip) {
    return notFound();
  }

  // Get trip-specific configuration
  const getTripConfig = () => {
    switch(tripId) {
      case 'charleston25':
        return {
          titleParts: ["Trees", "'n", "Seas"],
          titleColors: ["from-violet-600 to-purple-600", "text-gray-800 dark:text-gray-100", "from-rose-500 to-pink-500"],
          bgGradient: "from-violet-50 via-rose-50 to-white dark:from-violet-950 dark:via-rose-950 dark:to-slate-950",
          decorGradient: "from-violet-400/20 via-rose-500/20 to-teal-400/20 dark:from-violet-600/5 dark:via-rose-600/5 dark:to-teal-600/5",
          buttonGradient: "from-violet-600 to-rose-500",
          icons: [TreePine, Building, Sun],
          iconColors: "text-violet-300 dark:text-violet-400",
          pillBg: "bg-white/80 dark:bg-violet-950/80",
          cardBg: "bg-white dark:bg-violet-950/50",
          cardShadow: "charleston-shadow"
        };
      case 'oki25':
      default:
        return {
          titleParts: ["Beach", "'n", "Boil"],
          titleColors: ["from-cyan-500 to-blue-600", "text-gray-800 dark:text-gray-100", "from-orange-500 to-yellow-500"],
          bgGradient: "from-cyan-50 via-blue-50 to-white dark:from-ocean-night-50 dark:via-ocean-900 dark:to-ocean-night-50",
          decorGradient: "from-cyan-400/20 via-blue-500/20 to-orange-400/20 dark:from-cyan-600/5 dark:via-blue-600/5 dark:to-orange-600/5",
          buttonGradient: "from-cyan-500 to-blue-600",
          icons: [Sun, Waves, Palmtree],
          iconColors: "text-cyan-300 dark:text-cyan-400",
          pillBg: "bg-white/80 dark:bg-ocean-night-100/80",
          cardBg: "bg-white dark:bg-ocean-night-100",
          cardShadow: ""
        };
    }
  };

  const config = getTripConfig();
  
  // Get all unique attendees
  const allAttendees = [...new Set(itinerary.flatMap(day => day.attendees))];

  return (
    <div data-trip={tripId} className={`min-h-screen bg-gradient-to-b ${config.bgGradient}`}>
      {/* Theme Toggle in corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${config.decorGradient}`} />
          {tripId === 'charleston25' && (
            <div className="absolute inset-0 rainbow-row-gradient opacity-10" />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
        </div>

        {/* Decorative Elements */}
        {config.icons.map((Icon, index) => (
          <div 
            key={index}
            className={`absolute ${
              index === 0 ? 'top-10 left-10' : 
              index === 1 ? 'bottom-20 right-10' : 
              'top-1/3 right-1/4'
            } ${config.iconColors} opacity-50 animate-pulse`}
            style={{ animationDelay: `${index}s` }}
          >
            <Icon className={`${index === 0 ? 'w-20 h-20' : index === 1 ? 'w-24 h-24' : 'w-16 h-16'}`} />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${config.titleColors[0]} bg-clip-text text-transparent`}>
              {config.titleParts[0]}
            </span>
            <span className={config.titleColors[1]}> {config.titleParts[1]} </span>
            <span className={`bg-gradient-to-r ${config.titleColors[2]} bg-clip-text text-transparent`}>
              {config.titleParts[2]}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-2">
            {trip.description}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {trip.dates} • {trip.location}
          </p>

          {/* Family Members */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allAttendees.map((name) => (
              <span
                key={name}
                className={`px-4 py-2 ${config.pillBg} backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm ${config.cardShadow}`}
              >
                {name}
              </span>
            ))}
          </div>

          {/* Start Button */}
          <button
            onClick={() => router.push(`/${tripId}/itinerary`)}
            className={`px-8 py-4 bg-gradient-to-r ${config.buttonGradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg`}
          >
            Start Your Adventure →
          </button>
        </div>
      </div>

      {/* Family Photo Card - Simplified version, no day cards */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className={`${config.cardBg} rounded-2xl shadow-2xl overflow-hidden ${config.cardShadow}`}>
          <div className="relative h-64 md:h-96">
            <img
              src={trip.coverPhoto}
              alt={trip.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
              {trip.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-200">
              {trip.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative waves at bottom */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className={tripId === 'oki25' ? 'text-cyan-100 dark:text-cyan-900' : 'text-violet-100 dark:text-violet-900'}>
            <path fill="currentColor" d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
