// Weather service using OpenWeatherMap API
const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';
const OAK_ISLAND_LAT = 33.9144;
const OAK_ISLAND_LON = -78.1036;

// Cache duration: 30 minutes (weather doesn't change that frequently)
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

interface WeatherData {
  temp: number;
  condition: string;
  sunset: string;
  sunrise: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface CachedWeather {
  data: WeatherData;
  timestamp: number;
}

// In-memory cache
let weatherCache: Record<string, CachedWeather> = {};

// Browser storage cache for offline support
const STORAGE_KEY = 'beach-n-boil-weather-cache';

function loadFromStorage(): Record<string, CachedWeather> {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveToStorage(cache: Record<string, CachedWeather>) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore storage errors
  }
}

// Initialize cache from storage
if (typeof window !== 'undefined') {
  weatherCache = loadFromStorage();
}

// Fallback mock data
const mockWeatherData: Record<string, WeatherData> = {
  "2025-06-06": { 
    temp: 78, 
    condition: "sunny", 
    sunset: "8:12 PM",
    sunrise: "6:01 AM",
    humidity: 65,
    windSpeed: 10,
    description: "Clear sky"
  },
  "2025-06-07": { 
    temp: 81, 
    condition: "partly-cloudy", 
    sunset: "8:13 PM",
    sunrise: "6:01 AM", 
    humidity: 70,
    windSpeed: 12,
    description: "Few clouds"
  },
  "2025-06-08": { 
    temp: 79, 
    condition: "sunny", 
    sunset: "8:13 PM",
    sunrise: "6:02 AM",
    humidity: 68,
    windSpeed: 8,
    description: "Clear sky"
  },
};

function getWeatherCondition(weatherId: number): string {
  if (weatherId >= 200 && weatherId < 300) return "thunderstorm";
  if (weatherId >= 300 && weatherId < 600) return "rainy";
  if (weatherId >= 600 && weatherId < 700) return "snow";
  if (weatherId >= 700 && weatherId < 800) return "foggy";
  if (weatherId === 800) return "sunny";
  if (weatherId >= 801 && weatherId <= 804) return "partly-cloudy";
  return "cloudy";
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export async function getWeatherForDate(date: string): Promise<WeatherData> {
  // Check cache first
  const cached = weatherCache[date];
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    console.log('Returning cached weather for', date);
    return cached.data;
  }

  // If no API key, return mock data
  if (!OPENWEATHER_API_KEY) {
    console.log('No OpenWeather API key found, using mock data');
    const mockData = mockWeatherData[date] || mockWeatherData["2025-06-06"];
    
    // Cache mock data too
    weatherCache[date] = {
      data: mockData,
      timestamp: Date.now()
    };
    saveToStorage(weatherCache);
    
    return mockData;
  }

  try {
    console.log('Fetching fresh weather data for', date);
    
    // Get current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${OAK_ISLAND_LAT}&lon=${OAK_ISLAND_LON}&appid=${OPENWEATHER_API_KEY}&units=imperial`,
      { 
        next: { revalidate: 1800 }, // Next.js cache for 30 minutes
        cache: 'force-cache' // Browser cache
      }
    );

    if (!currentResponse.ok) {
      throw new Error('Weather API request failed');
    }

    const currentData = await currentResponse.json();

    // For future dates, we'd need to use the forecast API
    // For now, we'll use current weather as approximation
    const weatherData: WeatherData = {
      temp: Math.round(currentData.main.temp),
      condition: getWeatherCondition(currentData.weather[0].id),
      sunset: formatTime(currentData.sys.sunset),
      sunrise: formatTime(currentData.sys.sunrise),
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed),
      description: currentData.weather[0].description
    };

    // Cache the result
    weatherCache[date] = {
      data: weatherData,
      timestamp: Date.now()
    };
    saveToStorage(weatherCache);

    return weatherData;
  } catch (error) {
    console.error('Error fetching weather:', error);
    
    // Try to return cached data even if expired
    if (cached) {
      console.log('Returning expired cache due to error');
      return cached.data;
    }
    
    // Fallback to mock data
    return mockWeatherData[date] || mockWeatherData["2025-06-06"];
  }
}

// Get weather for all days
export async function getAllWeather(): Promise<Record<string, WeatherData>> {
  const dates = ["2025-06-06", "2025-06-07", "2025-06-08"];
  const weatherMap: Record<string, WeatherData> = {};

  // If no API key, return all mock data
  if (!OPENWEATHER_API_KEY) {
    return mockWeatherData;
  }

  // For a real implementation, you'd want to use the forecast API
  // to get weather for future dates. For now, we'll use current weather
  // as a reasonable approximation for the demo
  for (const date of dates) {
    weatherMap[date] = await getWeatherForDate(date);
  }

  return weatherMap;
}
