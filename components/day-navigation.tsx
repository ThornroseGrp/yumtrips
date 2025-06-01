"use client";

import { useItinerary } from "@/lib/itinerary-context";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DayNavigationProps {
  tripId?: string;
}

export function DayNavigation({ tripId }: DayNavigationProps) {
  const { days, selectedDayId, setSelectedDayId } = useItinerary();
  const currentIndex = days.findIndex(day => day.id === selectedDayId);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedDayId(days[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (currentIndex < days.length - 1) {
      setSelectedDayId(days[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getDayLabel = (dayId: string) => {
    switch(dayId) {
      case 'friday': return 'Fri';
      case 'saturday': return 'Sat';
      case 'sunday': return 'Sun';
      case 'wednesday': return 'Wed';
      case 'thursday': return 'Thu';
      default: return dayId.substring(0, 3);
    }
  };

  // Get trip-specific styling
  const getThemeConfig = () => {
    if (tripId === 'charleston25') {
      return {
        borderColor: "border-violet-100 dark:border-violet-900",
        bgGradient: "bg-gradient-to-r from-violet-50/50 to-rose-50/50 dark:from-violet-950/50 dark:to-rose-950/50",
        activeGradient: "bg-gradient-to-r from-violet-500 to-rose-500 dark:from-violet-700 dark:to-rose-700",
        textColor: "text-violet-600 dark:text-violet-400",
        hoverBg: "hover:bg-violet-100 dark:hover:bg-violet-900/50",
        inactiveText: "text-gray-600 dark:text-gray-300",
        inactiveHover: "hover:bg-white/50 dark:hover:bg-violet-950/50"
      };
    }
    // Default OKI25 theme
    return {
      borderColor: "border-cyan-100 dark:border-ocean-900",
      bgGradient: "bg-gradient-to-r from-cyan-50/50 to-blue-50/50 dark:from-ocean-night-200/50 dark:to-ocean-night-300/50",
      activeGradient: "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-ocean-dark dark:to-ocean-900",
      textColor: "text-cyan-600 dark:text-cyan-400",
      hoverBg: "hover:bg-cyan-100 dark:hover:bg-ocean-night-300",
      inactiveText: "text-gray-600 dark:text-gray-300",
      inactiveHover: "hover:bg-white/50 dark:hover:bg-ocean-night-100/50"
    };
  };

  const theme = getThemeConfig();

  return (
    <div className={`border-t ${theme.borderColor} ${theme.bgGradient}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={cn(
              "p-2 rounded-full transition-all",
              currentIndex === 0
                ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                : `${theme.textColor} ${theme.hoverBg}`
            )}
            aria-label="Previous day"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => {
                  setSelectedDayId(day.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  day.id === selectedDayId
                    ? `${theme.activeGradient} text-white shadow-md`
                    : `${theme.inactiveText} ${theme.inactiveHover}`
                )}
              >
                {getDayLabel(day.id)}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === days.length - 1}
            className={cn(
              "p-2 rounded-full transition-all",
              currentIndex === days.length - 1
                ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                : `${theme.textColor} ${theme.hoverBg}`
            )}
            aria-label="Next day"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
