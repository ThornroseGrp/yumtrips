# Photo Reference Issues

## Current Photo References in Code vs Available Photos

### ❌ Missing Photos (Referenced but not in /public/photos/)

These are referenced in `lib/itinerary-data.ts` but don't exist:

1. **Friday Activities:**
   - `bagel-dock-menu-3.webp` (only have 1-2)
   - `island-joe-menu-1.webp` (not in photos dir)
   - `cafe-koa-menu-1.webp` (not in photos dir)
   - `oki-bagel-menu-1.webp` (not in photos dir)
   - `old-bridge-diner-menu-1.webp` (not in photos dir)
   - `bobs-donuts-menu-1.webp` (not in photos dir)

2. **Menu Options:**
   - Various menu photos for restaurants not matching

### ✅ Available Photos Not Being Used

These exist in `/public/photos/` but aren't referenced:

1. **Additional Beach/House Photos:**
   - `oak-island-house-5.webp`
   - `oak-island-house-6.webp`
   - `oak-island-house-7.webp`
   - `oak-island-beach-3.webp`
   - `oak-island-beach-4.webp`

2. **Restaurant Photos:**
   - `inlet-view-menu-1.webp`
   - `inlet-view-menu-2.webp`
   - `inlet-view-menu-3.webp`
   - `southport-coffee-menu-1.webp`
   - `southport-coffee-menu-2.webp`
   - `southport-coffee-menu-3.webp`

3. **Additional Photos:**
   - `rainbow-row-1.webp`
   - `angel-oak-3.webp`
   - `charleston-jail-3.webp`
   - `congaree-3.webp`
   - `french-quarter-inn-patio.webp`
   - `french-quarter-inn-room.webp`
   - `french-quarter-inn-wine.webp`

### 🔧 Quick Fixes Needed

1. Update `itinerary-data.ts` to use correct photo filenames
2. Remove references to non-existent photos
3. Add the available photos to appropriate activities
4. Consider using the extra beach/house photos in relevant sections

### 📸 Photo Naming Convention

Current pattern in `/public/photos/`:
- Location photos: `{location-name}-{number}.webp`
- Menu photos: `{restaurant-name}-menu-{number}.webp`
- Activity photos: `{activity-name}-{number}.webp`

Note: The app shows beach emoji 🏖️ placeholders for missing photos, so it doesn't break, but fixing these references would make the app look much better.
