import { type Day } from "@/lib/itinerary-data";
import { format, parseISO } from "date-fns";
import { Calendar, Users, Sun, Sunset as SunsetIcon, Cloud, CloudRain, Waves } from "lucide-react";

interface DayHeaderProps {
  day: Day;
}

// Mock weather data - in production, use real API
const weatherData = {
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

export function DayHeader({ day }: DayHeaderProps) {
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

  return (
    <div className="bg-white dark:bg-ocean-night-100 rounded-2xl shadow-sm dark:shadow-xl border border-cyan-100 dark:border-ocean-900 overflow-hidden">
      {/* Beach-themed header gradient */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 dark:from-ocean-dark dark:via-ocean-900 dark:to-ocean-950 p-6 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">{day.title}</h2>
          <div className="flex items-center justify-center space-x-2 text-cyan-100">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{format(date, "EEEE, MMMM d, yyyy")}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Weather Section */}
        {weather && (
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-ocean-night-200 dark:to-ocean-night-200 rounded-xl p-4">
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

            <div className="flex items-center justify-center space-x-6 mt-3 pt-3 border-t border-cyan-200 dark:border-ocean-900">
              <div className="flex items-center space-x-1">
                <Waves className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
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
            <Users className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />
            Today's Crew:
          </span>
          {day.attendees.map((person, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-ocean-night-200 dark:to-ocean-night-300 rounded-full text-sm text-gray-700 dark:text-gray-200"
            >
              {person}
            </span>
          ))}
        </div>

        {/* Day Summary */}
        <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-ocean-night-200 dark:to-ocean-night-200 rounded-xl border border-orange-100 dark:border-ocean-900">
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{day.hype}</p>
        </div>

        {/* Quick highlights in a grid */}
        {day.quickFacts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {day.quickFacts.slice(0, 4).map((fact, index) => (
              <div key={index} className="flex items-start">
                <span className="text-cyan-500 mr-2 mt-0.5">🌊</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{fact}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
