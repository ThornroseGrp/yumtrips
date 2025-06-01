"use client";

import { useParams } from 'next/navigation';
import { getTrip } from '@/lib/trips';
import { ItineraryProvider } from '@/lib/itinerary-context';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import the itinerary page to avoid SSR issues
const ItineraryPage = dynamic(() => import('@/app/itinerary/page'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading itinerary...</p>
      </div>
    </div>
  )
});

export default function TripItineraryPage() {
  const params = useParams();
  const tripId = params.tripId as string;
  const [trip, setTrip] = useState(getTrip(tripId));

  useEffect(() => {
    const tripData = getTrip(tripId);
    if (!tripData) {
      notFound();
    }
    setTrip(tripData);
    
    // Update theme colors based on trip
    if (tripData && tripData.theme) {
      document.documentElement.style.setProperty('--trip-primary', tripData.theme.primary);
      document.documentElement.style.setProperty('--trip-secondary', tripData.theme.secondary);
      document.documentElement.style.setProperty('--trip-accent', tripData.theme.accent);
    }
  }, [tripId]);

  if (!trip) {
    return notFound();
  }

  return (
    <div data-trip={tripId}>
      <ItineraryProvider tripId={tripId}>
        <ItineraryPage />
      </ItineraryProvider>
    </div>
  );
}
