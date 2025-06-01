"use client";

import { useItinerary } from "@/lib/itinerary-context";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DayNavigation() {
  const { days, selectedDayId, setSelectedDayId } = useItinerary();
  const currentIndex = days.findIndex(day => day.id === selectedDayId);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedDayId(days[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < days.length - 1) {
      setSelectedDayId(days[currentIndex + 1].id);
    }
  };

  const getDayLabel = (dayId: string) => {
    switch(dayId) {
      case 'friday': return 'Fri';
      case 'saturday': return 'Sat';
      case 'sunday': return 'Sun';
      default: return dayId.substring(0, 3);
    }
  };

  return (
    <div className="border-t border-cyan-100 dark:border-ocean-900 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 dark:from-ocean-night-200/50 dark:to-ocean-night-300/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={cn(
              "p-2 rounded-full transition-all",
              currentIndex === 0
                ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                : "text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-ocean-night-300"
            )}
            aria-label="Previous day"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDayId(day.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  day.id === selectedDayId
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-ocean-dark dark:to-ocean-900 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-ocean-night-100/50"
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
                : "text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-ocean-night-300"
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
