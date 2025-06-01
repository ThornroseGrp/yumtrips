# 🌍 Yumtrips - Family Travel Itinerary Platform

A beautiful, mobile-first Progressive Web App platform for family vacation itineraries with real-time activity tracking, weather integration, and stunning visual design.

![Yumtrips](https://img.shields.io/badge/PWA-Yumtrips-06b6d4?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)

## 🏖️ Overview

Yumtrips is a custom-built Progressive Web App platform designed for creating beautiful, interactive family vacation itineraries. Each trip features real-time activity tracking, weather integration, family voting, and a beautiful theme with both light and dark modes.

### ✨ Key Features

- **📱 Mobile-First PWA** - Installable app with offline support
- **🌍 Multi-Trip Support** - Beautiful landing page showcasing all trips
- **⏰ Real-Time Activity Tracking** - Smart time-based highlighting with warnings
- **🌤️ Live Weather Integration** - OpenWeatherMap API for current conditions
- **👥 Family Voting System** - Interactive voting for each activity
- **🌙 Themed Dark Mode** - Custom themes for each trip
- **📍 Google Maps Integration** - One-tap navigation to all locations
- **📸 Photo Galleries** - Activity and restaurant photos with carousels
- **🎯 Timeline & Card Views** - Switch between detailed and compact layouts

## 🚢 Current Trips

### 🌊 Beach 'n Boil - Outer Banks Adventure
**June 6-8, 2025** | Oak Island, NC
- Smith family beach vacation with seafood boil and Nana's memorial
- Ocean-themed design with cyan and blue colors
- Path: `trips.yumrovia.com/oki25`

### 🌳 Charleston to Oak Island Adventure
**June 4-6, 2025** | Mooresville → Charleston → Oak Island
- Forest cathedrals, raw bars, ghost tours & beach reunion
- Features Congaree National Park, Angel Oak, and Charleston's historic district
- Purple and pink theme with amber accents
- Path: `trips.yumrovia.com/charleston25`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Weather API (Optional):**
   - Copy `.env.local.example` to `.env.local`
   - Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Add your API key to `.env.local`:
     ```
     NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
     ```
   - The app will use mock weather data if no API key is provided

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:5174](http://localhost:5174)

## 📂 Project Structure

```
yumtrips/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page showing all trips
│   ├── globals.css        # Global styles & animations
│   └── [tripId]/          # Dynamic route for each trip
│       └── page.tsx       # Trip itinerary view
├── components/            # Shared React components
│   ├── day-navigation.tsx # Persistent top navigation
│   ├── activity-card.tsx  # Activity cards with time awareness
│   ├── photo-carousel.tsx # Smart carousel component
│   ├── voting-section.tsx # Family voting component
│   ├── day-header.tsx     # Day info with weather widget
│   ├── timeline-toggle.tsx # View mode switcher
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── lib/                   # Utilities and data
│   ├── trips/            # Trip-specific data
│   │   ├── index.ts      # Trip configurations
│   │   ├── oki25/        # Beach 'n Boil trip
│   │   │   └── itinerary.ts
│   │   └── charleston25/ # Charleston trip
│   │       └── itinerary.ts    # Full 3-day itinerary
│   ├── itinerary-context.tsx # Dynamic trip loading
│   └── utils.ts          # Helper functions
├── public/
│   ├── photos/           # Organized by trip
│   │   ├── oki25/        # 52 Beach 'n Boil photos
│   │   └── charleston25/ # 47 Charleston photos
│   └── manifest.json     # PWA manifest
└── docs/                 # Documentation
    ├── README.md         # This file
    └── PRD.md           # Product requirements
```

## 🎨 Adding a New Trip

1. **Create trip configuration** in `/lib/trips/index.ts`:
   ```typescript
   'tripId': {
     id: 'tripId',
     name: "Full Trip Name",
     shortName: "Short Name",
     description: "Trip description",
     dates: "Date Range",
     location: "Location",
     theme: {
       primary: "color",
       secondary: "color",
       accent: "color",
       gradient: "from-color-500 to-color-600"
     },
     coverPhoto: "/photos/tripId/cover.webp",
     icon: "🎯"
   }
   ```

2. **Create itinerary data** at `/lib/trips/tripId/itinerary.ts`

3. **Add photos** to `/public/photos/tripId/`

4. **Test** at `localhost:5174/tripId`

## 🌐 Routes

- `/` - Beautiful landing page with all trips
- `/oki25` - Beach 'n Boil home page
- `/oki25/itinerary` - Beach 'n Boil daily itinerary
- `/charleston25` - Charleston trip home page  
- `/charleston25/itinerary` - Charleston daily itinerary
- `/[tripId]` - Any future trip home page
- `/[tripId]/itinerary` - Any future trip itinerary

## 📸 Photo Guidelines

- **Activity Photos**: 400px × 300px (4:3 ratio), WebP format
- **Food Photos**: 300px × 200px (3:2 ratio), WebP format
- **File Size**: Under 200KB each
- **Naming**: `location-name-1.webp`
- **Organization**: Store in `/public/photos/[tripId]/`

## 💡 Recent Updates (June 2025)

### Multi-Trip Platform Conversion
- Transformed from single Beach 'n Boil app to Yumtrips platform
- Added dynamic trip loading system
- Created beautiful animated landing page
- Organized photos into trip-specific folders

### Charleston Trip Addition
- Added complete 3-day Charleston to Oak Island itinerary
- Includes Congaree National Park, Angel Oak, and Charleston highlights
- Features haunted jail tour, raw bars, and fried chicken
- 47 Charleston-specific photos organized

### Technical Improvements
- Dynamic itinerary loading based on trip ID
- Trip-specific theming system
- Improved photo organization (oki25/ and charleston25/ folders)
- Updated manifest.json for Yumtrips branding
- Maintained all existing features (voting, weather, timeline)

## 💙 GitHub Repository

The project is now available on GitHub:
- **Repository**: [https://github.com/shawnsninja/yumtrips](https://github.com/shawnsninja/yumtrips)
- **Clone**: `git clone https://github.com/shawnsninja/yumtrips.git`

## 🚀 Deployment

The app is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

### Domain Setup
Configure your domain to point to:
- `trips.yumrovia.com` → Landing page
- `trips.yumrovia.com/oki25` → Beach trip
- `trips.yumrovia.com/charleston25` → Charleston trip

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS v3
- **Icons**: Lucide React
- **State**: React Context API with dynamic loading
- **Date**: date-fns
- **PWA**: Native support with manifest
- **Deployment**: Optimized for Vercel

## 📝 Contributing

This is a private family project. For updates or issues, contact the development team.

## 📄 License

Private project for family vacation planning.

---

Made with ❤️ for amazing family adventures
