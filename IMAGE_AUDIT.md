# 📸 Complete Image Audit - Beach 'n Boil

## 🔴 MISSING IMAGES (Need to be created/found)

### Friday Activities
1. **Scenic Marsh Walkway** - No marsh/boardwalk photos
2. **Oak Island Lighthouse** - No lighthouse photos  
3. **Lil & John's Sweetreat** - Using wrong photo (island-provisions-menu-1.webp)

### Saturday Activities
1. **OKI Scoop Shop & Donuts** - No donut shop photos

### Sunday Activities
No specific photos for Sunday locations

## 🟡 INCORRECT IMAGE REFERENCES (Need to fix in code)

### Friday
1. **Ice Cream** - References `island-provisions-menu-1.webp` but should be ice cream photos

### Saturday
1. **Sunrise Beach Walk** - Could use `oak-island-sunrise.webp` (available!)
2. **Optional Lunch** - Has `inlet-view-menu-1/2/3.webp` available but not referenced

### Sunday
1. **Southport Coffee** - Has `southport-coffee-menu-1/2/3.webp` available but not referenced

## ✅ CORRECTLY MAPPED IMAGES

### Accommodations
- **Beach House**: oak-island-house-1/2/3/4/5/6/7.webp ✓
- **Andell Inn**: andell-inn-1/2/pool/room.webp (not used in current data)
- **French Quarter Inn**: french-quarter-inn-1/2/patio/room/wine.webp (not used)

### Activities
- **Kindred Spirit Mailbox**: kindred-spirit-1/2/3.webp ✓
- **Seafood Boil**: seafood-boil-1/2/3/4/5/6.webp ✓
- **Beach Photos**: oak-island-beach-1/2/3/4.webp ✓

### Restaurants
- **KoKo Cabana**: koko-cabana-menu-1/2/3.webp ✓
- **Bagel Dock Café**: bagel-dock-menu-1/2.webp ✓
- **Inlet View**: inlet-view-menu-1/2/3.webp (available but not used)
- **Southport Coffee**: southport-coffee-menu-1/2/3.webp (available but not used)

## 🎯 UNUSED QUALITY PHOTOS (Could be added)

These photos exist but aren't being used anywhere:
- `angel-oak-1/2/3.webp` - Beautiful tree photos
- `charleston-cemetery-1/2.webp` - Historic cemetery
- `charleston-jail-1/2/3.webp` - Jail tour photos
- `charleston-waterfront-1/2.webp` - Waterfront views
- `congaree-1/2/3.webp` - National park boardwalk
- `king-street-1/2.webp` - Shopping district
- `rainbow-row-1.webp` - Colorful houses
- Various restaurant photos not in current itinerary

## 📝 ACTION ITEMS

### Priority 1 - Fix Existing References
1. Update ice cream activity to not use island-provisions photo
2. Add sunrise photo to Saturday morning
3. Add inlet-view photos to optional lunch
4. Add southport-coffee photos to Sunday

### Priority 2 - Find/Create Missing Photos
1. Marsh boardwalk photo for Friday
2. Oak Island Lighthouse photo
3. Ice cream shop photo (Lil & John's)
4. Donut shop photo (OKI Scoop)

### Priority 3 - Consider Adding Charleston Activities
Since we have many Charleston photos (Angel Oak, cemetery, jail, waterfront), consider adding these as optional activities or mentioning them in the itinerary.

## 🔧 Code Changes Needed

Update `lib/itinerary-data.ts`:

```typescript
// Friday changes
- Ice cream: Remove island-provisions photo reference
- Lighthouse: Currently no photos (will show placeholder)

// Saturday changes  
- Sunrise: Add ["oak-island-sunrise.webp"]
- Inlet View: Add ["inlet-view-menu-1.webp", "inlet-view-menu-2.webp", "inlet-view-menu-3.webp"]

// Sunday changes
- Southport Coffee: Add ["southport-coffee-menu-1.webp", "southport-coffee-menu-2.webp", "southport-coffee-menu-3.webp"]
```
