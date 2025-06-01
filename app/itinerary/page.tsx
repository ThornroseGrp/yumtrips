"use client";

import { useItinerary } from "@/lib/itinerary-context";
import { DayNavigation } from "@/components/day-navigation";
import { ActivityCard } from "@/components/activity-card";
import { DayHeader } from "@/components/day-header";
import { TimelineToggle } from "@/components/timeline-toggle";
import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Home, Ghost, TreePine, Fish, Building } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Separate component that uses useSearchParams
function ItineraryContent() {
  const searchParams = useSearchParams();
  const { currentDay, setSelectedDayId, tripId } = useItinerary();
  const [isTimelineView, setIsTimelineView] = useState(false);

  // Get trip-specific configuration
  const getTripConfig = () => {
    switch(tripId) {
      case 'charleston25':
        return {
          name: "Trees 'n Seas",
          icon: "🌳",
          gradient: "from-violet-600 to-rose-500",
          textGradient: "from-violet-600 to-rose-600 dark:from-violet-400 dark:to-rose-400",
          bgGradient: "from-violet-50 via-rose-50/50 to-white dark:from-violet-950 dark:via-rose-950/50 dark:to-slate-950",
          headerBg: "bg-white/90 dark:bg-violet-950/90",
          borderColor: "border-violet-100 dark:border-violet-900",
          hoverBg: "hover:bg-violet-50 dark:hover:bg-violet-900/50",
          iconColor: "text-violet-600 dark:text-violet-400",
          tagline: "Historic charm meets coastal adventure"
        };
      case 'oki25':
      default:
        return {
          name: "Beach 'n Boil",
          icon: "🌊",
          gradient: "from-cyan-600 to-blue-600",
          textGradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400",
          bgGradient: "from-cyan-50 via-blue-50/50 to-white dark:from-ocean-night-50 dark:via-ocean-900/50 dark:to-ocean-night-50",
          headerBg: "bg-white/90 dark:bg-ocean-night-100/90",
          borderColor: "border-cyan-100 dark:border-ocean-900",
          hoverBg: "hover:bg-cyan-50 dark:hover:bg-ocean-night-200",
          iconColor: "text-cyan-600 dark:text-cyan-400",
          tagline: "Sun, sand, and seafood adventures"
        };
    }
  };

  const tripConfig = getTripConfig();

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
    <div className={`min-h-screen bg-gradient-to-b ${tripConfig.bgGradient}`}>
      {/* Navigation Bar */}
      <header className={`sticky top-0 z-50 ${tripConfig.headerBg} backdrop-blur-md shadow-sm border-b ${tripConfig.borderColor}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href={`/${tripId}`}
                className={`p-2 ${tripConfig.hoverBg} rounded-lg transition-colors`}
                aria-label="Trip Home"
              >
                <Home className={`w-5 h-5 ${tripConfig.iconColor}`} />
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{tripConfig.icon}</span>
                <h1 className={`text-xl font-semibold bg-gradient-to-r ${tripConfig.textGradient} bg-clip-text text-transparent`}>
                  {tripConfig.name}
                </h1>
                {tripId === 'charleston25' && (
                  <Ghost className="w-4 h-4 text-violet-500 dark:text-violet-400 opacity-60" />
                )}
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
        <DayNavigation tripId={tripId} />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <DayHeader day={currentDay} tripId={tripId} />
        
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
                  tripId={tripId}
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
                  tripId={tripId}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`mt-16 border-t ${tripConfig.borderColor} bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{tripConfig.icon}</span>
              <div>
                <p className={`font-semibold bg-gradient-to-r ${tripConfig.textGradient} bg-clip-text text-transparent`}>
                  {tripConfig.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tripConfig.tagline}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href={`/${tripId}`}
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
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
            Made with ❤️ for amazing family adventures
          </div>
        </div>
      </footer>
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
