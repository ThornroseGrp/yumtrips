'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowRight, Waves } from 'lucide-react';
import { getAllTrips, type TripConfig } from '@/lib/trips';
import { forceScrollToTop } from '@/lib/scroll-utils';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const trips = getAllTrips();

  useEffect(() => {
    setMounted(true);
    // Scroll to top when page loads
    forceScrollToTop();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 pt-8 md:pt-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 animate-fade-in">
              <Waves className="h-8 w-8 text-cyan-500" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Yumtrips
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 animate-fade-in-delay">
              Family adventures, beautifully planned
            </p>
          </div>
        </header>

        {/* Trips Grid */}
        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trips.map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Made with ❤️ for amazing family adventures</p>
        </footer>
      </div>
    </div>
  );
}

function TripCard({ trip, index }: { trip: TripConfig; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${trip.id}`}>
      <div
        className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up cursor-pointer`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cover Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-t ${trip.theme?.gradient || 'from-gray-600 to-gray-800'} opacity-40 z-10`}
          />
          {trip.id === 'charleston25' && (
            <div className="absolute inset-0 rainbow-row-gradient opacity-20 z-20" />
          )}
          <img
            src={trip.coverPhoto}
            alt={trip.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Trip Icon */}
          <div className="absolute top-4 right-4 z-20 text-4xl animate-bounce-slow">
            {trip.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
              {trip.shortName}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {trip.description}
            </p>
          </div>

          {/* Trip Details */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Calendar className="h-4 w-4" />
              <span>{trip.dates}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>{trip.location}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium group-hover:gap-4 transition-all">
            <span>View Itinerary</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-all duration-300 pointer-events-none`}
        />
      </div>
    </Link>
  );
}
