"use client";

import { Cloud, CloudRain, Sun, Sunset, Sunrise, Wind, Droplets, CloudSnow, CloudLightning, CloudFog } from "lucide-react";
import { useEffect, useState } from "react";
import { getWeatherForDate } from "@/lib/weather-service";

interface WeatherWidgetProps {
  date: string;
}

interface WeatherData {
  temp: number;
  condition: string;
  sunset: string;
  sunrise: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

export function WeatherWidget({ date }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      try {
        const weatherData = await getWeatherForDate(date);
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [date]);

  if (loading) {
    return (
      <div className="flex items-center justify-between bg-muted/50 rounded-md p-3 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-muted rounded" />
          <div>
            <div className="h-4 w-16 bg-muted rounded mb-1" />
            <div className="h-3 w-20 bg-muted rounded" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-muted rounded" />
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="w-5 h-5 text-yellow-500" />;
      case "partly-cloudy":
        return <Cloud className="w-5 h-5 text-gray-500" />;
      case "cloudy":
        return <Cloud className="w-5 h-5 text-gray-600" />;
      case "rainy":
        return <CloudRain className="w-5 h-5 text-blue-500" />;
      case "thunderstorm":
        return <CloudLightning className="w-5 h-5 text-purple-500" />;
      case "snow":
        return <CloudSnow className="w-5 h-5 text-blue-300" />;
      case "foggy":
        return <CloudFog className="w-5 h-5 text-gray-400" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-muted/50 rounded-md p-3 space-y-2">
      {/* Main weather info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getWeatherIcon()}
          <div>
            <p className="text-sm font-medium">{weather.temp}°F</p>
            <p className="text-xs text-muted-foreground capitalize">{weather.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Wind className="w-4 h-4" />
            <span>{weather.windSpeed} mph</span>
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4" />
            <span>{weather.humidity}%</span>
          </div>
        </div>
      </div>

      {/* Sun times */}
      <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-2">
        <div className="flex items-center gap-1">
          <Sunrise className="w-3 h-3" />
          <span>{weather.sunrise}</span>
        </div>
        <div className="flex items-center gap-1">
          <Sunset className="w-3 h-3" />
          <span>{weather.sunset}</span>
        </div>
      </div>
    </div>
  );
}
