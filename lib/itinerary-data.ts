export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'food' | 'activity' | 'travel' | 'accommodation';
  options?: Activity[];
  highlights?: string[];
  notes?: string[];
  photos?: string[];
  mapUrl?: string;
  location?: string;
}

export interface Day {
  id: string;
  date: string;
  title: string;
  attendees: string[];
  activities: Activity[];
  hype: string;
  quickFacts: string[];
}
