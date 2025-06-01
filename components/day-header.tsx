import { type Day } from "@/lib/itinerary-data";
import { format, parseISO } from "date-fns";
import { Calendar, Users, Sun, Sunset as SunsetIcon, Cloud, CloudRain, Waves, TreePine, Ghost } from "lucide-react";

interface DayHeaderProps {
  day: Day;
  tripId?: string;
}

// Mock weather data - in production, use real API
const weatherData = {
  "2025-06-04": { 
    temp: 82, 
    condition: "sunny", 
    sunrise: "6:15 AM", 
    sunset: "8:05 PM",
    humidity: 60,
    windSpeed: 8
  },
  "2025-06-05": { 
    temp: 79, 
    condition: "partly-cloudy", 
    sunrise: "6:15 AM", 
    sunset: "8:06 PM",
    humidity: 65,
    windSpeed: 10
  },
  "2025-06-06": { 
    temp: 78, 
    condition: "sunny", 
    sunrise: "6:01 AM", 
    sunset: "8:12 PM",
    humidity: 65,
    windSpeed: 12
  },
  "2025-06-07": { 
    temp: 81, 
    condition: "partly-cloudy", 
    sunrise: "6:01 AM", 
    sunset: "8:13 PM",
    humidity: 70,
    windSpeed: 15
  },
  "2025-06-08": { 
    temp: 79, 
    condition: "sunny", 
    sunrise: "6:02 AM", 
    sunset: "8:13 PM",
    humidity: 68,
    windSpeed: 10
  },
};

export function DayHeader({ day, tripId }: DayHeaderProps) {
  const date = parseISO(day.date);
  const weather = weatherData[day.date as keyof typeof weatherData];

  const getWeatherIcon = () => {
    switch (weather?.condition) {
      case "sunny":
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case "partly-cloudy":
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case "rainy":
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-500" />;
    }
  };

  // Get trip-specific styling
  const getThemeConfig = () => {
    if (tripId === 'charleston25') {
      return {
        headerGradient: "charleston-header-gradient",
        borderColor: "border-violet-200 dark:border-violet-900",
        shadowColor: "charleston-shadow",
        weatherBg: "bg-gradient-to-r from-violet-100 to-rose-100 dark:from-violet-950/50 dark:to-rose-950/50 tree-canopy",
        summaryBg: "bg-gradient-to-r from-rose-100 to-pink-100 dark:from-violet-950/30 dark:to-rose-950/30 cobblestone-texture",
        summaryBorder: "border-rose-200 dark:border-violet-900",
        attendeeBg: "bg-gradient-to-r from-violet-100 to-rose-100 dark:from-violet-900/50 dark:to-rose-900/50",
        accentColor: "text-violet-600 dark:text-violet-400",
        bulletIcon: "🌳",
        bgMain: "bg-white dark:bg-violet-950/50 carriage-border",
        weatherBorder: "border-violet-200 dark:border-violet-900",
        hasGhostAccent: true
      };
    }
    // Default OKI25 theme
    return {
      headerGradient: "bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 dark:from-ocean-dark dark:via-ocean-900 dark:to-ocean-950",
      borderColor: "border-cyan-100 dark:border-ocean-900",
      shadowColor: "dark:shadow-xl",
      weatherBg: "bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-ocean-night-200 dark:to-ocean-night-200",
      summaryBg: "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-ocean-night-200 dark:to-ocean-night-200",
      summaryBorder: "border-orange-100 dark:border-ocean-900",
      attendeeBg: "bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-ocean-night-200 dark:to-ocean-night-300",
      accentColor: "text-cyan-600 dark:text-cyan-400",
      bulletIcon: "🌊",
      bgMain: "bg-white dark:bg-ocean-night-100",
      weatherBorder: "border-cyan-200 dark:border-ocean-900",
      hasGhostAccent: false
    };
  };

  const theme = getThemeConfig();

  return (
    <div className={`${theme.bgMain} rounded-2xl shadow-sm ${theme.shadowColor} border ${theme.borderColor} overflow-hidden`}>
      {/* Header gradient */}
      <div className={`${theme.headerGradient} p-6 text-white`}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-3xl font-bold">{day.title}</h2>
            {theme.hasGhostAccent && day.title.includes("Ghost") && (
              <Ghost className="w-6 h-6 text-white/80 animate-pulse" />
            )}
          </div>
          <div className="flex items-center justify-center space-x-2 text-white/90">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{format(date, "EEEE, MMMM d, yyyy")}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Weather Section */}
        {weather && (
          <div className={`${theme.weatherBg} rounded-xl p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getWeatherIcon()}
                <div>
                  <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{weather.temp}°F</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                    {weather.condition.replace("-", " ")}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="flex items-center justify-center text-orange-500 mb-1">
                    <Sun className="w-4 h-4" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Sunrise</p>
                  <p className="font-medium text-gray-800 dark:text-gray-100">{weather.sunrise}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-orange-600 mb-1">
                    <SunsetIcon className="w-4 h-4" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Sunset</p>
                  <p className="font-medium text-gray-800 dark:text-gray-100">{weather.sunset}</p>
                </div>
              </div>
            </div>

            <div className={`flex items-center justify-center space-x-6 mt-3 pt-3 border-t ${theme.weatherBorder}`}>
              <div className="flex items-center space-x-1">
                {tripId === 'charleston25' ? (
                  <TreePine className={`w-4 h-4 ${theme.accentColor}`} />
                ) : (
                  <Waves className={`w-4 h-4 ${theme.accentColor}`} />
                )}
                <span className="text-sm text-gray-600 dark:text-gray-300">Wind: {weather.windSpeed} mph</span>
              </div>
              <div className="flex items-center space-x-1">
                <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Humidity: {weather.humidity}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Attendees with better styling */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center">
            <Users className={`w-4 h-4 mr-2 ${theme.accentColor}`} />
            Today's Crew:
          </span>
          {day.attendees.map((person, index) => (
            <span
              key={index}
              className={`px-3 py-1 ${theme.attendeeBg} rounded-full text-sm text-gray-700 dark:text-gray-200`}
            >
              {person}
            </span>
          ))}
        </div>

        {/* Day Summary */}
        <div className={`p-4 ${theme.summaryBg} rounded-xl border ${theme.summaryBorder}`}>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{day.hype}</p>
        </div>

        {/* Quick highlights in a grid */}
        {day.quickFacts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {day.quickFacts.slice(0, 4).map((fact, index) => (
              <div key={index} className="flex items-start">
                <span className={`mr-2 mt-0.5`}>{theme.bulletIcon}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{fact}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
