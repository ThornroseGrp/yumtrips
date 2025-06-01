"use client";

import { useParams, useRouter } from 'next/navigation';
import { getTrip } from '@/lib/trips';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { Sun, Waves, Palmtree, Calendar, Users, MapPin, TreePine, Building, Shell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

// Import trip data for previews
import { itineraryData as oki25Data } from '@/lib/trips/oki25/itinerary';
import { charleston25Itinerary as charleston25Data } from '@/lib/trips/charleston25/itinerary';

const tripData: Record<string, any[]> = {
  'oki25': oki25Data,
  'charleston25': charleston25Data
};

export default function TripHomePage() {
  const params = useParams();
  const router = useRouter();
  const tripId = params.tripId as string;
  const [trip, setTrip] = useState(getTrip(tripId));
  const itinerary = tripData[tripId] || [];

  useEffect(() => {
    const tripData = getTrip(tripId);
    if (!tripData) {
      notFound();
    }
    setTrip(tripData);
    
    // Update theme colors based on trip
    if (tripData) {
      document.documentElement.style.setProperty('--trip-primary', tripData.theme.primary);
      document.documentElement.style.setProperty('--trip-secondary', tripData.theme.secondary);
      document.documentElement.style.setProperty('--trip-accent', tripData.theme.accent);
    }
  }, [tripId]);

  if (!trip) {
    return notFound();
  }

  // Get trip-specific icons
  const getTripIcon = () => {
    switch(tripId) {
      case 'oki25':
        return { main: Waves, secondary: [Sun, Palmtree, Shell] };
      case 'charleston25':
        return { main: Building, secondary: [TreePine, Sun, MapPin] };
      default:
        return { main: Sun, secondary: [Waves, Palmtree] };
    }
  };

  const icons = getTripIcon();
  const MainIcon = icons.main;

  // Get all unique attendees
  const allAttendees = [...new Set(itinerary.flatMap(day => day.attendees))];

  return (
    <div data-trip={tripId} className={`min-h-screen bg-gradient-to-b ${
      tripId === 'oki25' 
        ? 'from-cyan-50 via-blue-50 to-white dark:from-ocean-night-50 dark:via-ocean-900 dark:to-ocean-night-50'
        : 'from-violet-50 via-rose-50 to-white dark:from-violet-950 dark:via-rose-950 dark:to-slate-950'
    }`}>
      {/* Theme Toggle in corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '100vh' }}>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${
            tripId === 'oki25'
              ? 'from-cyan-400/20 via-blue-500/20 to-orange-400/20 dark:from-cyan-600/5 dark:via-blue-600/5 dark:to-orange-600/5'
              : 'from-violet-400/20 via-rose-500/20 to-teal-400/20 dark:from-violet-600/5 dark:via-rose-600/5 dark:to-teal-600/5'
          }`} />
          {tripId === 'charleston25' && (
            <div className="absolute inset-0 rainbow-row-gradient opacity-10" />
          )}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
        </div>

        {/* Decorative Elements */}
        {icons.secondary.map((Icon, index) => (
          <div 
            key={index}
            className={`absolute ${
              index === 0 ? 'top-10 left-10' : 
              index === 1 ? 'bottom-20 right-10' : 
              'top-1/3 right-1/4'
            } ${
              tripId === 'oki25' 
                ? 'text-cyan-300 dark:text-cyan-400' 
                : 'text-violet-300 dark:text-violet-400'
            } opacity-50 animate-pulse`}
            style={{ animationDelay: `${index}s` }}
          >
            <Icon className={`${index === 1 ? 'w-24 h-24' : 'w-16 h-16'}`} />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="text-6xl md:text-8xl font-bold mb-4">
            {trip.icon}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${
              tripId === 'oki25'
                ? 'from-cyan-500 to-blue-600'
                : 'from-violet-600 to-rose-500'
            } bg-clip-text text-transparent`}>
              {trip.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-2">
            {trip.description}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {trip.dates} • {trip.location}
          </p>

          {/* Family Members */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allAttendees.map((name) => (
              <span
                key={name}
                className={`px-4 py-2 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm ${
                  tripId === 'oki25'
                    ? 'bg-white/80 dark:bg-ocean-night-100/80 text-gray-700 dark:text-gray-200'
                    : 'bg-white/80 dark:bg-violet-950/80 text-gray-700 dark:text-gray-200 charleston-shadow'
                }`}
              >
                {name}
              </span>
            ))}
          </div>

          {/* Start Button */}
          <button
            onClick={() => router.push(`/${tripId}/itinerary`)}
            className={`px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg text-white ${
              tripId === 'oki25'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                : 'bg-gradient-to-r from-violet-600 to-rose-500'
            }`}
          >
            Start Your Adventure →
          </button>
        </div>
      </div>

      {/* Cover Photo Card */}
      <div className="relative z-20 -mt-20 mb-16 mx-auto max-w-4xl px-4">
        <div className={`rounded-2xl shadow-2xl overflow-hidden ${
          tripId === 'oki25'
            ? 'bg-white dark:bg-ocean-night-100'
            : 'bg-white dark:bg-violet-950/50 charleston-shadow'
        }`}>
          <div className="relative h-64 md:h-96">
            <img
              src={trip.coverPhoto}
              alt={trip.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-2">
              {trip.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-200">
              {trip.description}
            </p>
          </div>
        </div>
      </div>

      {/* Day Preview Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">
          {itinerary.length} Days of Adventure
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {itinerary.map((day, index) => {
            // Find first photo in the day's activities
            let backgroundPhoto = null;
            for (const activity of day.activities) {
              if (activity.photos && activity.photos.length > 0) {
                backgroundPhoto = activity.photos[0];
                break;
              }
            }
            
            return (
              <div
                key={day.id}
                onClick={() => router.push(`/${tripId}/itinerary?day=${day.id}`)}
                className="group cursor-pointer"
              >
                <div className={`rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                  tripId === 'oki25'
                    ? 'bg-white dark:bg-ocean-night-100'
                    : 'bg-white dark:bg-violet-950/50 charleston-shadow'
                }`}>
                  {/* Day Image with Background Photo */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${
                    tripId === 'oki25'
                      ? 'from-cyan-400 to-blue-500 dark:from-ocean-dark dark:to-ocean-900'
                      : 'from-violet-500 to-rose-500 dark:from-violet-800 dark:to-rose-800'
                  }`}>
                    {/* Background photo */}
                    {backgroundPhoto && (
                      <img
                        src={`/${backgroundPhoto}`}
                        alt={day.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-8xl font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white/80 text-sm">Day {index + 1}</p>
                      <h3 className="text-white text-2xl font-bold">{day.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(day.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                      {day.hype}
                    </p>

                    {/* Activity Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {day.activities.length} activities
                      </span>
                      <span className={`group-hover:translate-x-2 transition-transform ${
                        tripId === 'oki25'
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : 'text-violet-600 dark:text-violet-400'
                      }`}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-16 ${
        tripId === 'oki25'
          ? 'bg-gradient-to-b from-white to-cyan-50 dark:from-ocean-night-50 dark:to-ocean-night-100'
          : 'bg-gradient-to-b from-white to-violet-50 dark:from-slate-950 dark:to-violet-950/30'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center pb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-8">
            Everything You Need for the Perfect Trip
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sun, label: "Daily Highlights", color: tripId === 'oki25' ? "text-orange-500" : "text-amber-500" },
              { icon: MapPin, label: "Map Links", color: tripId === 'oki25' ? "text-blue-500" : "text-violet-500" },
              { icon: MainIcon, label: "Activities", color: tripId === 'oki25' ? "text-cyan-500" : "text-rose-500" },
              { icon: Users, label: "Group Voting", color: tripId === 'oki25' ? "text-green-500" : "text-teal-500" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="text-center">
                <Icon className={`w-12 h-12 mx-auto mb-2 ${color}`} />
                <p className="text-sm text-gray-700 dark:text-gray-200">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
