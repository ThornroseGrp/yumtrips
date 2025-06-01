"use client";

import { getAllTrips } from '@/lib/trips';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar, MapPin, Users } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function TripsLandingPage() {
  const router = useRouter();
  const trips = getAllTrips();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="pt-12 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Family Adventures
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your next journey
          </p>
        </div>
      </header>

      {/* Trips Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => router.push(`/${trip.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                {/* Trip Image */}
                <div className="relative h-64">
                  <Image
                    src={trip.coverPhoto}
                    alt={trip.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-4xl mb-2 block">{trip.icon}</span>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {trip.shortName}
                    </h2>
                    <p className="text-white/90 text-sm">{trip.name}</p>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {trip.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{trip.dates}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{trip.location}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className={`text-sm font-medium bg-gradient-to-r ${trip.theme.gradient} bg-clip-text text-transparent`}>
                      View Itinerary
                    </span>
                    <span className="text-gray-400 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            More Adventures Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Stay tuned for future family trips and adventures!
          </p>
        </div>
      </main>
    </div>
  );
}
