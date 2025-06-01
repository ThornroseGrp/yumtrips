# Charleston Trip Setup Guide

## Where to Put Your Charleston Files:

### 1. Charleston Photos
Put all your Charleston photos in:
```
/public/photos/charleston25/
```

Examples:
- `rainbow-row-1.webp`
- `french-quarter-inn-1.webp`
- `167-raw-menu-1.webp`
- `boone-hall-1.webp`
- etc.

### 2. Charleston Itinerary Data
Edit the file at:
```
/lib/trips/charleston25/itinerary.ts
```

This file contains:
- Day-by-day activities
- Times, locations, descriptions
- Photo references
- Google Maps links

### 3. Photo Naming Convention
Keep it simple and descriptive:
```
location-name-number.webp

Examples:
- rainbow-row-1.webp
- rainbow-row-2.webp
- french-quarter-inn-lobby.webp
- 167-raw-menu-1.webp
- she-crab-soup.webp
```

### 4. Activity Structure
Each activity needs:
```typescript
{
  id: "unique-id",
  time: "15:00",  // 24-hour format
  title: "Activity Name",
  description: "What you'll do",
  type: "food" | "activity" | "travel" | "accommodation",
  photos: ["photo-1.webp", "photo-2.webp"],
  mapUrl: "https://maps.google.com/?q=Location+Name",
  location: "Address",
  highlights: ["Key point 1", "Key point 2"],
  notes: ["Important info", "Tips"]
}
```

### 5. Quick Start:
1. Copy your Charleston photos to `/public/photos/charleston25/`
2. Edit `/lib/trips/charleston25/itinerary.ts` with your activities
3. Update attendees list with actual names
4. Add all activities for each day

## Tips:
- Use 24-hour time format (15:00 not 3:00 PM)
- Keep photo files under 500KB for performance
- Use .webp format for best quality/size
- Include Google Maps links for all locations
- Add menu photos for restaurants
- Include tips in the notes section
