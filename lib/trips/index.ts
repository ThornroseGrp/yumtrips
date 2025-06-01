// Trip configuration type
export interface TripConfig {
  id: string;
  name: string;
  shortName: string;
  description: string;
  dates: string;
  location: string;
  themeId: string; // Reference to theme system
  coverPhoto: string;
  icon: string;
  // Legacy theme support (will be deprecated)
  theme?: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
}

// All available trips
export const trips: Record<string, TripConfig> = {
  'oki25': {
    id: 'oki25',
    name: "Beach 'n Boil - Outer Banks Adventure",
    shortName: "OKI '25",
    description: "Smith family beach vacation with seafood boil and Nana's memorial",
    dates: "June 6-8, 2025",
    location: "Oak Island, NC",
    themeId: 'ocean', // Using new theme system
    theme: { // Legacy support
      primary: "cyan",
      secondary: "blue", 
      accent: "orange",
      gradient: "from-cyan-500 to-blue-600"
    },
    coverPhoto: "/photos/oki25/cover-family.webp",
    icon: "🌊"
  },
  'charleston25': {
    id: 'charleston25',
    name: "Trees 'n Seas",
    shortName: "Trees 'n Seas",
    description: "Forest cathedrals, raw bars, ghost tours & beach reunion",
    dates: "June 4-6, 2025",
    location: "Mooresville → Charleston → Oak Island",
    themeId: 'charleston', // Using new theme system
    theme: { // Legacy support
      primary: "violet",
      secondary: "rose",
      accent: "teal",
      gradient: "from-violet-600 to-rose-500"
    },
    coverPhoto: "/photos/charleston25/rainbow-row-1.webp",
    icon: "🌳"
  }
};

// Helper to get trip by ID
export function getTrip(tripId: string): TripConfig | null {
  return trips[tripId] || null;
}

// Get all trips for landing page
export function getAllTrips(): TripConfig[] {
  return Object.values(trips);
}
