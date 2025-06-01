"use client";

import { ItineraryProvider } from '@/lib/itinerary-context';
import TideTestContent from './tide-test-content';

export default function TideTestPage() {
  return (
    <ItineraryProvider tripId="oki25">
      <TideTestContent />
    </ItineraryProvider>
  );
}
