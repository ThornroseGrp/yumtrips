# Multi-Trip Architecture Plan

## Single App with Multiple Itineraries

### URL Structure:
```
tours.yumrovia.com/           → Landing page (all trips)
tours.yumrovia.com/oki25      → Beach 'n Boil
tours.yumrovia.com/charleston25 → Charleston Trip
tours.yumrovia.com/europe26    → Future trips...
```

### Benefits of This Approach:

1. **Shared Code**
   - One codebase to maintain
   - Components (ActivityCard, VotingSection, etc.) shared
   - Bug fixes apply to all trips
   - New features available everywhere

2. **Consistent Experience**
   - Same UI/UX across all trips
   - Family members learn once, use everywhere
   - Unified voting system

3. **Easy Management**
   - Single deployment
   - One domain (tours.yumrovia.com)
   - Centralized weather caching
   - Shared PWA functionality

4. **Scalability**
   - Add new trips easily
   - Just add trip config + itinerary data
   - No new deployments needed

### Implementation Steps:

1. **Restructure Current App**
   ```
   /lib/trips/
     ├── index.ts          (trip configurations)
     ├── oki25/
     │   ├── itinerary.ts  (dates, activities)
     │   └── photos/       (trip-specific photos)
     └── charleston25/
         ├── itinerary.ts
         └── photos/
   ```

2. **Dynamic Routing**
   ```
   /app/
     ├── page.tsx          → Landing page
     ├── [tripId]/
     │   └── page.tsx      → Trip-specific page
     └── components/       → Shared components
   ```

3. **Theme System**
   - Each trip has color theme
   - CSS variables update based on trip
   - Dark mode works for all

4. **Photo Organization**
   ```
   /public/photos/
     ├── oki25/
     │   ├── beach-1.webp
     │   └── ...
     └── charleston25/
         ├── rainbow-row-1.webp
         └── ...
   ```

### Migration Plan:

1. **Phase 1**: Restructure current app
   - Move itinerary data to trip-specific file
   - Add trip configuration
   - Update routing

2. **Phase 2**: Add landing page
   - Beautiful trip cards
   - Quick access to all adventures
   - Family photo gallery?

3. **Phase 3**: Add Charleston
   - Copy itinerary structure
   - Add Charleston photos
   - Set purple/gold theme

4. **Phase 4**: Deploy
   - Single domain: tours.yumrovia.com
   - All trips under one roof

### Alternative: Keep Separate Apps

If you prefer separate apps:

**Pros:**
- Complete independence
- Different features per trip
- Separate repos

**Cons:**
- Duplicate code
- Maintain multiple apps
- Fix bugs in multiple places
- Different URLs to remember

### Recommendation:

**Go with the single app approach!** It's much better for:
- Long-term maintenance
- Consistent experience
- Adding future trips
- Family ease of use

Would you like me to start implementing this structure?
