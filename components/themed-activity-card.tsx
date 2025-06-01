"use client";

import { type Activity } from "@/lib/itinerary-data";
import { cn } from "@/lib/utils";
import { useItinerary } from "@/lib/itinerary-context";
import { PhotoCarousel } from "./photo-carousel";
import { VotingSection } from "./voting-section";
import { 
  Clock, 
  MapPin, 
  ChevronDown,
  ChevronUp,
  Circle,
  Info,
  Bell,
  AlertCircle
} from "lucide-react";
import { useState, useEffect, memo } from "react";
import { format, parseISO, isWithinInterval, addMinutes, subMinutes } from "date-fns";

interface ThemedActivityCardProps {
  activity: Activity;
  isTimelineView?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  currentDate: string;
}

export const ThemedActivityCard = memo(function ThemedActivityCard({ 
  activity, 
  isTimelineView = false, 
  isFirst = false, 
  isLast = false,
  currentDate 
}: ThemedActivityCardProps) {
  const { currentActivity, theme } = useItinerary();
  const [isExpanded, setIsExpanded] = useState(!isTimelineView);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [timeStatus, setTimeStatus] = useState<'past' | 'current' | 'upcoming' | 'soon' | 'future'>('future');
  
  // Reset expanded state when switching to timeline view
  useEffect(() => {
    setIsExpanded(!isTimelineView);
  }, [isTimelineView]);

  // Calculate time status
  useEffect(() => {
    const checkTimeStatus = () => {
      const now = new Date();
      const [hours, minutes] = activity.time.split(':').map(Number);
      const activityDate = parseISO(currentDate);
      activityDate.setHours(hours, minutes, 0, 0);

      // Check if activity is today
      if (format(now, 'yyyy-MM-dd') !== currentDate) {
        setTimeStatus('future');
        return;
      }

      // Activity is today, check time
      const thirtyMinutesBefore = subMinutes(activityDate, 30);
      const thirtyMinutesAfter = addMinutes(activityDate, 30);

      if (now < thirtyMinutesBefore) {
        setTimeStatus('future');
      } else if (isWithinInterval(now, { start: thirtyMinutesBefore, end: activityDate })) {
        setTimeStatus('soon'); // Within 30 minutes
      } else if (isWithinInterval(now, { start: activityDate, end: thirtyMinutesAfter })) {
        setTimeStatus('current'); // Currently happening
      } else if (now > thirtyMinutesAfter) {
        setTimeStatus('past');
      }
    };

    checkTimeStatus();
    const interval = setInterval(checkTimeStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [activity.time, currentDate]);
  
  const isActive = currentActivity?.id === activity.id;
  const isPast = timeStatus === 'past';
  const isSoon = timeStatus === 'soon';
  const isCurrent = timeStatus === 'current';
  
  // Get activity icon from theme
  const getActivityIcon = () => {
    if (!theme) return null;
    const IconComponent = theme.icons.activities[activity.type];
    return <IconComponent className="w-4 h-4" />;
  };

  // Get theme-specific styles
  const getThemeStyles = () => {
    if (!theme) {
      // Fallback styles
      return {
        cardBg: "bg-white dark:bg-gray-900",
        cardBorder: "border-gray-100 dark:border-gray-800",
        primaryColor: "cyan",
        secondaryColor: "blue",
        accentColor: "orange"
      };
    }

    return {
      cardBg: `bg-white dark:bg-gray-900 ${theme.effects.textures?.join(' ')}`,
      cardBorder: theme.effects.borders || "border-gray-100 dark:border-gray-800",
      primaryColor: theme.colors.primary,
      secondaryColor: theme.colors.secondary,
      accentColor: theme.colors.accent
    };
  };

  const styles = getThemeStyles();

  if (isTimelineView) {
    return (
      <div className="flex items-start gap-4">
        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className={cn(
            "w-3 h-3 rounded-full transition-all",
            isCurrent && "bg-cyan-500 ring-4 ring-cyan-100 animate-pulse",
            isSoon && "bg-orange-500 ring-4 ring-orange-100 animate-pulse",
            isPast && "bg-green-500",
            !isCurrent && !isSoon && !isPast && "bg-gray-300"
          )} />
          {!isLast && (
            <div className={cn(
              "w-0.5 h-16 -mt-1",
              isPast ? "bg-green-300" : "bg-gray-200"
            )} />
          )}
        </div>

        {/* Compact Card */}
        <div 
          className={cn(
            "flex-1 rounded-lg p-4 shadow-sm cursor-pointer transition-all hover:shadow-md mb-4",
            styles.cardBg,
            theme?.effects.shadows,
            isCurrent && "ring-2 ring-cyan-500",
            isSoon && "ring-2 ring-orange-500"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={cn(
                "text-sm font-medium",
                isPast ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-gray-100"
              )}>
                {activity.time}
              </span>
              {isSoon && <Bell className="w-4 h-4 text-orange-500 animate-bounce" />}
              {getActivityIcon()}
              <h3 className={cn(
                "font-medium",
                isPast ? "text-gray-500 line-through" : "text-gray-900 dark:text-gray-100"
              )}>
                {activity.title}
              </h3>
            </div>
            <ChevronDown className={cn(
              "w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform",
              isExpanded && "rotate-180"
            )} />
          </div>
          
          {isExpanded && (
            <div className="mt-4 space-y-3" onClick={(e) => e.stopPropagation()}>
              <p className="text-sm text-gray-600 dark:text-gray-300">{activity.description}</p>
              
              {/* Map Link */}
              {activity.mapUrl && (
                <a
                  href={activity.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Maps</span>
                </a>
              )}
              
              {/* Photos with theme styling */}
              {activity.photos && activity.photos.length > 0 && (
                <div 
                  onClick={(e) => e.stopPropagation()} 
                  className={theme?.photoStyle.frame && `${theme.photoStyle.frame}-frame`}
                >
                  <PhotoCarousel
                    photos={activity.photos}
                    alt={activity.title}
                    size="small"
                  />
                </div>
              )}
              
              <VotingSection activityId={activity.id} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-2xl overflow-hidden transition-all duration-300 border",
      styles.cardBg,
      styles.cardBorder,
      theme?.effects.shadows,
      theme?.interactive?.transitions,
      isCurrent && "border-cyan-500 shadow-lg ring-2 ring-cyan-500",
      isSoon && "border-orange-500 shadow-lg ring-2 ring-orange-500",
      isSoon && "animate-pulse-slow"
    )}>
      {/* Upcoming notification banner */}
      {isSoon && (
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 text-sm font-medium flex items-center">
          <Bell className="w-4 h-4 mr-2 animate-bounce" />
          Coming up in less than 30 minutes!
        </div>
      )}
      {isCurrent && (
        <div className={cn(
          "text-white px-4 py-2 text-sm font-medium flex items-center",
          theme?.colors.gradient ? `bg-gradient-to-r ${theme.colors.gradient}` : "bg-gradient-to-r from-cyan-400 to-blue-500"
        )}>
          <AlertCircle className="w-4 h-4 mr-2" />
          Happening now!
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Time and Status */}
          <div className="flex flex-col items-center">
            <span className={cn(
              "text-lg font-semibold",
              isPast ? "text-gray-400" : "text-gray-900 dark:text-gray-100"
            )}>
              {activity.time}
            </span>
            <div className="mt-2">
              <Circle className={cn(
                "w-4 h-4",
                isCurrent && "text-cyan-500 fill-cyan-500 animate-pulse",
                isSoon && "text-orange-500 fill-orange-500 animate-pulse",
                isPast && "text-green-500 fill-green-500",
                !isCurrent && !isSoon && !isPast && "text-gray-300"
              )} />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "p-1 rounded-lg flex items-center justify-center",
                    activity.type === "food" && "bg-orange-100 text-orange-600",
                    activity.type === "activity" && "bg-cyan-100 text-cyan-600",
                    activity.type === "travel" && "bg-blue-100 text-blue-600",
                    activity.type === "accommodation" && "bg-green-100 text-green-600"
                  )}>
                    {getActivityIcon()}
                  </span>
                  <h3 className={cn(
                    "text-xl font-semibold",
                    isPast ? "text-gray-500 line-through" : "text-gray-900 dark:text-gray-50"
                  )}>
                    {activity.title}
                  </h3>
                </div>
                {activity.location && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {activity.location}
                  </p>
                )}
              </div>
              
              {/* Map Link */}
              {activity.mapUrl && (
                <a
                  href={activity.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-2 bg-cyan-50 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Open in maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className={cn(
              "mt-3 leading-relaxed",
              isPast ? "text-gray-400" : "text-gray-600 dark:text-gray-300"
            )}>
              {activity.description}
            </p>

            {/* Photos with theme frame */}
            {activity.photos && activity.photos.length > 0 && (
              <div className={cn(
                "mt-4",
                theme?.photoStyle.frame && `${theme.photoStyle.frame}-frame`
              )}>
                <PhotoCarousel
                  photos={activity.photos}
                  alt={activity.title}
                  size={activity.type === "food" && activity.options ? "small" : "large"}
                />
              </div>
            )}

            {/* Highlights */}
            {activity.highlights && activity.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {activity.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}

            {/* Menu Highlights */}
            {activity.options && activity.options.length > 0 && (
              <div className="mt-4">
                <button
                  onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <span>Menu Highlights</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    isMenuExpanded && "rotate-180"
                  )} />
                </button>
                {isMenuExpanded && (
                  <div className={cn(
                    "mt-3 p-4 rounded-xl border",
                    "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700",
                    "border-orange-100 dark:border-gray-600"
                  )}>
                    <div className="space-y-2">
                      {activity.options.map((option) => (
                        <div key={option.id} className="text-sm">
                          <span className="font-semibold text-gray-900 dark:text-gray-100">{option.title}:</span>{" "}
                          <span className="text-gray-600 dark:text-gray-300">{option.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Notes */}
            {activity.notes && activity.notes.length > 0 && (
              <div className={cn(
                "mt-4 p-4 rounded-xl",
                "bg-blue-50 dark:bg-gray-800",
                theme?.effects.textures?.join(' ')
              )}>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">GOOD TO KNOW</p>
                    <ul className="space-y-1">
                      {activity.notes.map((note, index) => (
                        <li key={index} className="text-sm text-blue-800 dark:text-blue-200">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Voting Section */}
            {!isPast && <VotingSection activityId={activity.id} />}
          </div>
        </div>
      </div>
    </div>
  );
});
