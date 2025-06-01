# 🌍 Yumtrips - Family Travel Itinerary Platform - Product Requirements Document

## Project Overview

**Product Name**: Yumtrips  
**Version**: 2.0.0  
**Product Type**: Multi-trip Progressive Web App (PWA) Platform  
**Target Platform**: Mobile-first, responsive web application  
**Primary Users**: Family vacation groups  
**Use Case**: Beautiful landing page for multiple trips with real-time itinerary tracking  

## Implementation Status (June 1, 2025)

### ✅ Latest Updates

#### UI/UX Improvements (June 1, 2025)
- **Fixed Infinite Scroll Issue** - Implemented viewport container approach
  - Added proper height constraints (100vh) to html and body
  - Set overflow controls on #__next container
  - Prevents scrolling above navigation bar
  - Sticky navigation now works properly
- **Rainbow Gradient Branding** - Beach 'n Boil title styling
  - "Beach" displays in cyan-to-blue gradient
  - "Boil" displays in orange-to-yellow gradient
  - Matches original brand identity
- **Generic Content Updates** - Removed family-specific references
  - Changed "Smith family beach vacation" to "Beach vacation"
  - Updated photo card text to be more universal
  - Made content reusable for any group
- **Cover Photo Implementation** - Day preview cards enhanced
  - Each day card displays cover-day-{number}.webp
  - Photos appear at 30% opacity behind gradient
  - Both trips have themed cover photos

### ✅ Completed Features

#### Theme System (NEW - June 2025)
- **Comprehensive Theme Architecture** - 7 pre-built themes for different destination types
- **Dynamic Visual Transformation** - Complete UI adaptation based on trip theme
- **Theme Elements**:
  - Color systems with gradients and highlights
  - Typography with font options
  - Icon and emoji sets per destination type
  - Visual effects (animations, textures, shadows)
  - Photo frame styles (polaroid, vintage, rustic, etc.)
  - Interactive elements and decorations
- **Available Themes**:
  - Ocean (beaches, coastal)
  - Charleston (historic cities)
  - Tuscany (wine country, rural)
  - Alpine (mountains, skiing)
  - Tropical (islands, paradise)
  - Desert (southwest, canyons)
  - Urban (cities, metropolitan)
- **Easy Extension** - Simple to add custom themes

#### Platform Features
- **Multi-Trip Support** - Dynamic routing for unlimited trips
- **Beautiful Landing Page** - Animated cards showcasing all trips
- **Trip-Specific Theming** - Each trip has unique colors and branding
- **Dynamic Data Loading** - Itineraries load based on trip ID
- **Organized Photo System** - Photos stored by trip (oki25/, charleston25/)

#### Original Beach 'n Boil Features (Preserved)
- **Home Page** - Now serves as multi-trip landing
- **Mobile-First Design** - Fully responsive with persistent navigation
- **Beach Theme** - Now trip-specific (ocean for OKI, purple for Charleston)
- **Photo Carousels** - Working across all trips
- **Timeline View** - Available for each trip
- **Time-Based Highlighting** - 30-minute warnings, current activity tracking
- **Weather Display** - Full widget with sunrise/sunset, wind, humidity
- **Family Voting** - Works across all trips
- **Dark/Light Mode** - System-aware with manual toggle
- **Map Integration** - Google Maps links preserved
- **Menu Highlights** - Collapsible displays
- **Performance Optimization** - Memoized components
- **Activity Types** - Color-coded icons
- **PWA Structure** - Installable with updated branding

### 🚧 In Progress

- **Weather API** - Currently using mock data
- **Push Notifications** - Visual indicators implemented, push pending
- **Offline Support** - Basic structure in place

### 📋 Not Started

- **Photo Upload** - Family members adding photos
- **Expense Tracking** - Bill splitting features
- **Trip Templates** - Easy duplication for similar trips

---

## Current Trips

### 🌊 Beach 'n Boil - Outer Banks Adventure
- **Trip ID**: oki25
- **Dates**: June 6-8, 2025
- **Location**: Oak Island, NC
- **Attendees**: Kyle, Yury, Andrew, Leo, Nikki, Shawn, Lady Jae
- **Theme**: Ocean blues and sunset oranges
- **Highlights**: Seafood boil, Nana's memorial, lighthouse visits

### 🌳 Charleston to Oak Island Adventure
- **Trip ID**: charleston25
- **Dates**: June 4-6, 2025
- **Route**: Mooresville → Columbia → Charleston → Oak Island
- **Attendees**: Lady Jae, Nikki, Shawn (then joining full family)
### Charleston Theme Design (✅ Completed June 2025)
- **Color Palette**: Rainbow Row inspired pastels
  - Primary: Soft Violet (#c4b5fd - violet-300)
  - Secondary: Pastel Rose (#fbbfca - rose-200)
  - Accent: Mint Green (#a7f3d0 - emerald-200)
  - Header Gradient: Pastel purple to rose transition
- **Special Effects Implemented**: 
  - Rainbow Row gradient animation on landing page
  - Charleston-specific soft shadows
  - Cobblestone texture patterns on info cards
  - Tree canopy overlay on weather widgets
  - Horse carriage animation (subtle background)
  - Seafood emoji accent on restaurant menus
- **Icon**: 🌳 (tree for forest cathedrals)
- **Component Updates**:
  - Activity cards use violet/rose color scheme
  - Map buttons styled with violet accents
  - Highlights badges in pastel colors
  - Notes sections with cobblestone texture
  - Voting section dynamically shows 3 attendees
  - Header gradient uses custom Charleston class
- **Dark Mode**: Violet-950 base with rose accents

---

## Architecture Updates

### Architecture Updates

#### Theme System Architecture (NEW)
```typescript
interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  typography: {
    headingFont?: string;
    bodyFont?: string;
    decorativeFont?: string;
  };
  icons: {
    primary: string;
    activities: Record<ActivityType, string>;
  };
  effects: {
    animations?: string[];
    textures?: string[];
    shadows?: string;
  };
  photoStyle: {
    frame?: 'polaroid' | 'vintage' | 'rustic' | 'modern' | 'none';
    filter?: string;
  };
  // ... more theme properties
}
```

### URL Structure
- **Landing Page**: `trips.yumrovia.com`
- **Beach Trip**: `trips.yumrovia.com/oki25`
- **Charleston Trip**: `trips.yumrovia.com/charleston25`
- **Future Trips**: `trips.yumrovia.com/[tripId]`

### Data Structure
```typescript
// Trip Configuration
interface TripConfig {
  id: string;
  name: string;
  shortName: string;
  description: string;
  dates: string;
  location: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  coverPhoto: string;
  icon: string;
}

// Activity structure remains the same
interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'food' | 'activity' | 'travel' | 'accommodation';
  options?: Activity[];
  highlights?: string[];
  notes?: string[];
  photos?: string[];  // Now includes trip folder prefix
  mapUrl?: string;
}
```

### File Organization
```
/lib/trips/
├── index.ts                    # Trip configurations
├── oki25/
│   └── itinerary.ts           # Beach 'n Boil data
└── charleston25/
    └── itinerary.ts           # Charleston data

/public/photos/
├── oki25/                     # 52 beach trip photos
└── charleston25/              # 47 Charleston photos
```

---

## Technical Implementation

### Dynamic Trip Loading
- React Context updated to load trip-specific data
- Lazy loading of itinerary modules
- Trip ID passed through context
- Theme variables set dynamically

### Photo Path Updates
- All photos now prefixed with trip folder
- Example: `"kyle-family.jpg"` → `"oki25/kyle-family.jpg"`
- Maintains backward compatibility

### Landing Page Features
- Animated gradient backgrounds
- Hover effects on trip cards
- Responsive grid layout
- Trip-specific icons and colors
- Smooth transitions

---

## Performance Metrics

### Load Performance
- Landing page: < 2 seconds on 3G
- Trip pages: < 3 seconds on 3G
- Image lazy loading implemented
- Code splitting by trip

### User Engagement
- Multi-trip navigation tested
- Photo organization improved discoverability
- Maintained all original engagement metrics

---

## Success Metrics

### Platform Adoption
- **Multiple Trip Usage**: Users navigate between trips
- **Landing Page Engagement**: 80%+ users view multiple trips
- **Photo Organization**: Faster loading with trip-specific folders
- **Theme Consistency**: Each trip feels unique

### Technical Performance
- **Dynamic Loading**: < 500ms to switch trips
- **Photo Loading**: 95%+ success rate
- **Error Rate**: Less than 1% across all trips
- **Cross-Trip Navigation**: Seamless experience

---

## Future Enhancements

### Phase 2 Features
- **Trip Templates**: Duplicate and modify existing trips
- **User Accounts**: Save preferences across devices
- **Trip Sharing**: Share specific trips with different groups
- **Cost Splitting**: Per-trip expense tracking
- **Photo Uploads**: Trip-specific galleries

### Advanced Features
- **AI Trip Planning**: Suggest activities based on preferences
- **Weather-Based Alternatives**: Dynamic itinerary adjustments
- **Collaborative Planning**: Multiple users can edit
- **Integration APIs**: Import from travel booking sites

---

## Migration Notes

### From Beach 'n Boil to Yumtrips
1. **Directory**: Moved from `/beach-n-boil` to `/yumtrips`
2. **Branding**: Updated app name, manifest, and descriptions
3. **Photos**: Reorganized into trip-specific folders
4. **Navigation**: Added landing page with trip selection
5. **Context**: Updated to support dynamic trip loading

### Breaking Changes
- Photo paths now require trip prefix
- Landing page is new default route
- Trip-specific theming requires configuration

---

## Deployment Strategy

### Hosting
- **Platform**: Vercel (unchanged)
- **Domain**: trips.yumrovia.com
- **CDN**: Automatic via Vercel
- **SSL**: Included

### Environment
- Development: `localhost:5174`
- Production: `trips.yumrovia.com`

---

**Document Version**: 2.0  
**Last Updated**: June 1, 2025  
**Major Update**: Scrolling fix, rainbow gradients, and generic content