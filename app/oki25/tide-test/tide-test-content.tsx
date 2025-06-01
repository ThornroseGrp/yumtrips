"use client";

import { useItinerary } from "@/lib/itinerary-context";
import { DayNavigation } from "@/components/day-navigation";
import { ActivityCard } from "@/components/activity-card";
import { DayHeader } from "@/components/day-header";
import { TimelineToggle } from "@/components/timeline-toggle";
import { TideWidget } from "@/components/tide-widget";
import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Home, Waves } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { forceScrollToTop } from "@/lib/scroll-utils";

// Separate component that uses useSearchParams
function TideTestContentInner() {
  const searchParams = useSearchParams();
  const { currentDay, setSelectedDayId, tripId, selectedDayId } = useItinerary();
  const [isTimelineView, setIsTimelineView] = useState(false);

  // Scroll to top when day changes
  useEffect(() => {
    forceScrollToTop();
  }, [selectedDayId]);

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
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-ocean-night-100/90 backdrop-blur-md shadow-sm border-b border-cyan-100 dark:border-ocean-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/oki25"
                className="p-2 hover:bg-cyan-50 dark:hover:bg-ocean-night-200 rounded-lg transition-colors"
                aria-label="Trip Home"
              >
                <Home className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌊</span>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Beach 'n Boil
                </h1>
              </div>
              <span className="text-xs bg-cyan-100 dark:bg-ocean-800 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full">
                TIDE TEST
              </span>
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
        <DayNavigation tripId={tripId} />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <DayHeader day={currentDay} tripId={tripId} />
        
        {/* TIDE WIDGET - New Addition */}
        <div className="mt-6 mb-8">
          <TideWidget date={currentDay.date} />
        </div>

        {/* Beach Activity Notice */}
        {currentDay.activities.some(a => 
          a.title.toLowerCase().includes('beach') || 
          a.description.toLowerCase().includes('beach')
        ) && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-ocean-900/30 dark:to-ocean-800/30 rounded-xl border border-blue-200 dark:border-ocean-700">
            <div className="flex items-start gap-3">
              <Waves className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                  Beach Conditions Today
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Low tide is ideal for shelling and exploring tide pools. Check the tide times above to plan your beach activities!
                </p>
              </div>
            </div>
          </div>
        )}
        
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
      </main>
      
      {/* Footer */}
      <footer className="mt-16 border-t border-cyan-100 dark:border-ocean-900 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              <div>
                <p className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Beach 'n Boil
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sun, sand, and seafood adventures
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/oki25"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Trip Home
              </Link>
              <Link 
                href="/"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                All Trips
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
            <p>🧪 This is a test page for tide integration</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export component with Suspense wrapper
export default function TideTestContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tide test...</p>
        </div>
      </div>
    }>
      <TideTestContentInner />
    </Suspense>
  );
}
