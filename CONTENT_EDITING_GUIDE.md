# 📝 How to Edit Beach 'n Boil Content

## Recent Updates (December 2024)

### Performance Improvements
- Eliminated lag when switching between days
- Memoized heavy components (ActivityCard, VotingSection)
- Optimized re-renders with useCallback and useMemo
- Smooth transitions between card and timeline views

### Timeline View Enhancements
- Now starts collapsed for better overview
- Click protection on photo carousels
- Google Maps links available in expanded view
- Proper event propagation handling

### Time-Based Features
- 30-minute warnings with orange highlighting
- "Happening now!" banners for current activities
- Color-coded timeline dots
- Auto-updates every minute

### UI Improvements
- Menu options simplified to "Menu Highlights"
- Collapsible text-only menu display
- Dark mode toggle more visible
- Added early beach play activity for 2pm arrivals

## Quick Guide for Editing Text

All the itinerary content (activities, times, descriptions) is stored in ONE file:

### 📁 `/lib/itinerary-data.ts`

This file contains ALL the text content for the app, organized by day.

## How to Edit

1. **Open the file:** `/lib/itinerary-data.ts`

2. **Find the section you want to edit:**
   - Days are organized as: `friday`, `saturday`, `sunday`
   - Each day has activities listed in order

3. **Common edits:**

### Change Activity Time
```typescript
time: "14:00",  // Change this to any time like "14:30" or "2:00 PM"
```

### Change Activity Title
```typescript
title: "Early Beach Play (Optional)",  // Edit the title text
```

### Change Description
```typescript
description: "Your new description here",  // Main text about the activity
```

### Change Location
```typescript
location: "705 Ocean Dr",  // Address or location name
```

### Edit Highlights (bullet points)
```typescript
highlights: ["Sandcastles", "Wave jumping", "Beach chairs"],  // Short feature tags
```

### Edit Notes (important info)
```typescript
notes: ["Optional for early arrivals", "Beach toys in garage"],  // Helpful reminders
```

### Edit Menu Options (now Menu Highlights)
```typescript
options: [
  {
    id: "f4-1",
    title: "Grouper Bites",  // Menu item name
    description: "Perfect for sharing",  // Menu item description
    type: "food",
    photos: ["koko-cabana-menu-1.webp"]  // Photos won't display in UI
  }
]
```

**Note:** Menu options now display as collapsible "Menu Highlights" - text only, no photos shown.

## Structure Example

Here's what a typical activity looks like:

```typescript
{
  id: "f0",  // Unique ID (don't change)
  time: "14:00",  // Time of activity (24-hour format)
  title: "Early Beach Play (Optional)",  // Activity name
  description: "For families arriving early...",  // Full description
  type: "activity",  // Type: food, activity, travel, or accommodation
  photos: ["oak-island-beach-1.webp"],  // Photo filenames
  mapUrl: "https://maps.google.com/?q=...",  // Google Maps link
  location: "Beach Access at 16th Pl E",  // Optional location text
  highlights: ["Sandcastles", "Wave jumping"],  // Feature tags
  notes: ["Don't forget sunscreen!"]  // Important notes
}
```

## Day-Level Content

At the top of each day, you can edit:

```typescript
{
  id: "friday",
  date: "2025-06-06",  // Date of this day
  title: "Family Landing Day",  // Day title
  attendees: ["Kyle", "Yury", "Andrew", "Leo", "Nikki", "Shawn", "Lady Jae"],
  hype: "🏖️ Unpack, stretch across...",  // Day summary with emoji
  quickFacts: [  // Bullet points shown in day header
    "4pm house check-in / bunk pick",
    "Scenic Marsh Walkway group selfie"
  ]
}
```

## Adding New Activities

To add a new activity, copy an existing one and modify:

```typescript
{
  id: "f8",  // Give it a unique ID
  time: "21:00",  // Set the time (24-hour format)
  title: "Beach Bonfire",  // Name it
  description: "Gather around for s'mores...",  // Describe it
  type: "activity",  // Choose type
  photos: [],  // Add photos or leave empty for placeholder
  highlights: ["S'mores", "Ghost stories"],
  notes: ["Check fire regulations"]
}
```

## Time-Based Highlighting

The app automatically highlights activities based on current time:
- **Orange highlight**: Activity starting within 30 minutes
- **Cyan highlight**: Currently happening (within 30 min of start time)
- **Green indicator**: Past activities
- **Gray**: Future activities

## Tips

- **Save the file** and the app will automatically refresh
- **Use empty photos array** `photos: []` to show beach emoji placeholder 🏖️
- **Times** must be in 24-hour format: "14:00" not "2:00 PM"
- **Don't change IDs** unless adding new activities
- **Add emojis** to make descriptions more fun! 🌊🏖️🍦
- **Menu highlights** are now collapsible and text-only

## Common Sections to Edit

- **Day titles and hype text** - Make them exciting!
- **Activity descriptions** - Add personal touches
- **Notes** - Include practical reminders
- **Menu options** - Now display as compact "Menu Highlights"
- **Highlights** - Quick scannable features
- **Times** - Remember 24-hour format for proper highlighting

## Performance Note

The app is optimized for smooth performance. When editing:
- Changes appear instantly
- No need to restart the server
- Timeline view updates automatically
- Time-based highlighting continues to work

That's it! Just edit `/lib/itinerary-data.ts` and save. The app updates automatically! 🎉
