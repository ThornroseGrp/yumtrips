# 📸 Charleston Trip Setup Guide

## Quick Reference for Charleston25 Trip

### 📁 Where to Put Your Files:

#### Charleston Photos:
```
/public/photos/charleston25/
```
Drop all your Charleston photos in this folder! Make sure they're optimized:
- Activity photos: 400x300px (4:3 ratio)
- Food photos: 300x200px (3:2 ratio) 
- Use .webp format for best performance
- Keep under 200KB each

#### Charleston Itinerary:
```
/lib/trips/charleston25/itinerary.ts
```
The template is already created with Friday started. You need to:
1. Update the attendees list with actual family member names
2. Complete Friday's activities
3. Fill in Saturday's activities
4. Fill in Sunday's activities

### 🌐 Domain Setup:
- Main site: `trips.yumrovia.com` → Shows both trips
- Beach trip: `trips.yumrovia.com/oki25` → Beach 'n Boil 
- Charleston: `trips.yumrovia.com/charleston25` → Charleston trip

### 📝 Itinerary Template Structure:

Each activity should include:
```typescript
{
  id: "unique-id",
  time: "HH:MM",
  title: "Activity Name",
  description: "Detailed description",
  type: "food" | "activity" | "travel" | "accommodation",
  photos: ["photo1.webp", "photo2.webp"],
  mapUrl: "https://maps.google.com/?q=...",
  location: "Address",
  highlights: ["Key point 1", "Key point 2"],
  notes: ["Important note 1", "Note 2"],
  
  // For restaurants with menu options:
  options: [
    {
      id: "option-1",
      time: "HH:MM",
      title: "Menu Item",
      description: "Description",
      type: "food",
      photos: ["menu-photo.webp"]
    }
  ]
}
```

### 🎨 Charleston Theme:
The Charleston trip uses a purple/pink theme that's already configured:
- Primary: Purple
- Secondary: Pink  
- Accent: Amber
- Gradient: Purple to Pink

### ✅ Next Steps:

1. **Add Charleston photos** to `/public/photos/charleston25/`
2. **Edit the itinerary** at `/lib/trips/charleston25/itinerary.ts`
3. **Test locally** by running `npm run dev` and visiting `localhost:3000/charleston25`
4. **Deploy** when ready!

### 💡 Tips:
- Use descriptive photo names: `rainbow-row-1.webp`, `she-crab-soup.webp`
- Include Google Maps links for all locations
- Add menu highlights for restaurants
- Include reservation notes where needed
- Keep descriptions engaging but concise

Let me know when you're ready to add the Charleston content!
