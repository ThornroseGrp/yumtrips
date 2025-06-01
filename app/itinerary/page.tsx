"use client";

import { useItinerary } from "@/lib/itinerary-context";
import { DayNavigation } from "@/components/day-navigation";
import { ActivityCard } from "@/components/activity-card";
import { DayHeader } from "@/components/day-header";
import { TimelineToggle } from "@/components/timeline-toggle";
import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Separate component that uses useSearchParams
function ItineraryContent() {
  const searchParams = useSearchParams();
  const { currentDay, setSelectedDayId } = useItinerary();
  const [isTimelineView, setIsTimelineView] = useState(false);

  useEffect(() => {
    const dayParam = searchParams.get("day");
    if (dayParam) {
      setSelectedDayId(dayParam);
    }
  }, [searchParams, setSelectedDayId]);

  const handleToggleView = useCallback((value: boolean) => {
    setIsTimelineView(value);
  }, []);

  // Memoize activities to prevent re-renders
  const activities = useMemo(() => {
    return currentDay?.activities || [];
  }, [currentDay?.activities]);

  if (!currentDay) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your adventure...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50/50 to-white dark:from-ocean-night-50 dark:via-ocean-900/50 dark:to-ocean-night-50">
      {/* Beach-themed Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-ocean-night-100/90 backdrop-blur-md shadow-sm border-b border-cyan-100 dark:border-ocean-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="p-2 hover:bg-cyan-50 dark:hover:bg-ocean-night-200 rounded-lg transition-colors"
                aria-label="Home"
              >
                <Home className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌊</span>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Beach 'n Boil
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TimelineToggle 
                isTimelineView={isTimelineView} 
                onToggle={handleToggleView} 
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
        <DayNavigation />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <DayHeader day={currentDay} />
        
        <div className="mt-8">
          {isTimelineView ? (
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <ActivityCard 
                  key={activity.id} 
                  activity={activity} 
                  isTimelineView={true}
                  isFirst={index === 0}
                  isLast={index === activities.length - 1}
                  currentDate={currentDay.date}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {activities.map((activity) => (
                <ActivityCard 
                  key={activity.id} 
                  activity={activity} 
                  isTimelineView={false}
                  currentDate={currentDay.date}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Bottom spacing for mobile */}
        <div className="h-20" />
      </main>
    </div>
  );
}

// Main component with Suspense wrapper
export default function ItineraryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading itinerary...</p>
        </div>
      </div>
    }>
      <ItineraryContent />
    </Suspense>
  );
}
