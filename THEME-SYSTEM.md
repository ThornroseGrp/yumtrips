# 🎨 Yumtrips Theme System Documentation

## Overview

The Yumtrips Theme System is a comprehensive theming solution that transforms the entire visual experience of the app based on the destination type. Each theme includes colors, typography, icons, visual effects, photo styles, and interactive elements.

## Theme Structure

Each theme contains the following elements:

### 1. **Color System**
- `primary`: Main theme color
- `secondary`: Supporting color
- `accent`: Highlight color for CTAs and important elements
- `gradient`: Main gradient for headers
- `headerGradient`: Optional custom header gradient
- `highlights`: Array of additional accent colors

### 2. **Typography**
- `headingFont`: Font family for headings (serif, sans-serif, custom)
- `bodyFont`: Font family for body text
- `decorativeFont`: Special font for decorative elements
- `textTransform`: Text transformation (uppercase, lowercase, capitalize, none)

### 3. **Icons & Emojis**
- `primary`: Main emoji/icon representing the theme
- `secondary`: Array of supporting icons
- `bulletPoint`: Icon used for list items
- `activities`: Activity-specific icons (food, activity, travel, accommodation)

### 4. **Visual Effects**
- `animations`: CSS animation classes (wave, float, gentle-sway, etc.)
- `textures`: Background textures (sand-texture, cobblestone-texture, etc.)
- `patterns`: Decorative patterns
- `shadows`: Custom shadow styles
- `borders`: Border styles

### 5. **Photo Display**
- `frame`: Style of photo frame (none, polaroid, vintage, modern, ornate, rustic)
- `filter`: CSS filter effects
- `borderRadius`: Corner rounding
- `overlay`: Overlay effects

### 6. **Interactive Elements**
- `hoverEffect`: Hover animations
- `clickAnimation`: Click effects
- `transitions`: Transition timing

### 7. **Decorative Elements**
- `dividers`: Section dividers
- `backgrounds`: Background patterns/images
- `accents`: Small decorative elements
- `weatherWidget`: Weather-specific styling

## Available Themes

### 🌊 Ocean Theme
Perfect for beach destinations, coastal trips, and water activities.
- **Colors**: Cyan, blue, and orange
- **Effects**: Wave animations, sand textures
- **Photos**: Polaroid frames with bright, saturated colors
- **Icons**: 🌊 🏖️ 🌅 🐚 🏄‍♂️

### 🏛️ Charleston (Historic City) Theme
Ideal for historic cities, cultural destinations, and heritage sites.
- **Colors**: Violet, rose, and teal
- **Effects**: Rainbow gradient, cobblestone textures, tree canopy
- **Photos**: Vintage frames with slight sepia tone
- **Icons**: 🌳 🏛️ 👻 🦐 🌸

### 🌻 Tuscany Theme
For wine country, rural escapes, and Mediterranean destinations.
- **Colors**: Amber, stone, and olive
- **Effects**: Gentle sway, tuscan plaster, vineyard patterns
- **Photos**: Rustic frames with warm filters
- **Icons**: 🌻 🍇 🫒 🍷 🏺

### 🏔️ Alpine Theme
Mountain destinations, ski resorts, and wilderness adventures.
- **Colors**: Emerald, slate, and sky
- **Effects**: Snow fall, pine sway, wood grain textures
- **Photos**: Modern frames with high contrast
- **Icons**: 🏔️ 🌲 ⛷️ 🦌 🏕️

### 🌴 Tropical Paradise Theme
Island getaways, tropical destinations, and exotic locations.
- **Colors**: Lime, pink, and turquoise
- **Effects**: Palm sway, tropical breeze, bamboo textures
- **Photos**: No frames, rounded corners, vibrant saturation
- **Icons**: 🌴 🦜 🌺 🥥 🍹

### 🌵 Desert Theme
Southwest adventures, canyon trips, and arid landscapes.
- **Colors**: Orange, red, and turquoise
- **Effects**: Heat shimmer, tumble weed, adobe textures
- **Photos**: Rustic frames with warm contrast
- **Icons**: 🌵 🦎 ☀️ 🏜️ 🦅

### 🏙️ Urban Theme
City breaks, metropolitan adventures, and cultural city tours.
- **Colors**: Zinc, violet, and yellow
- **Effects**: Neon flicker, city pulse, concrete textures
- **Photos**: Modern frames with urban filters
- **Icons**: 🏙️ 🚇 🎭 🍕 🎨

## Implementation

### 1. **Adding Theme to a Trip**

```typescript
// In lib/trips/index.ts
export const trips: Record<string, TripConfig> = {
  'mytrip': {
    id: 'mytrip',
    name: "My Amazing Trip",
    themeId: 'tuscany', // Choose from available themes
    // ... other config
  }
};
```

### 2. **Creating a Custom Theme**

```typescript
// In lib/theme-system.ts
export const themes: Record<string, ThemeConfig> = {
  // ... existing themes
  
  'custom-theme': {
    id: 'custom-theme',
    name: 'My Custom Theme',
    description: 'A unique theme for special destinations',
    colors: {
      primary: 'indigo',
      secondary: 'purple',
      accent: 'pink',
      gradient: 'from-indigo-500 to-purple-600'
    },
    typography: {
      headingFont: 'serif',
      textTransform: 'none'
    },
    icons: {
      primary: '✨',
      secondary: ['🎨', '🎭', '🎪', '🎯'],
      bulletPoint: '•',
      activities: {
        food: '🍽️',
        activity: '🎯',
        travel: '✈️',
        accommodation: '🏨'
      }
    },
    // ... continue with effects, photo styles, etc.
  }
};
```

### 3. **CSS Classes for Custom Themes**

Add corresponding CSS in `app/theme-styles.css`:

```css
/* Custom Theme Textures */
.custom-texture {
  background-image: /* your pattern */;
}

/* Custom Animations */
@keyframes custom-animation {
  /* your keyframes */
}

/* Custom Borders, Shadows, etc. */
.custom-border { /* styles */ }
.custom-shadow { /* styles */ }
```

## Component Integration

### ThemedActivityCard
The `ThemedActivityCard` component automatically applies theme styles:
- Activity icons from theme
- Colors for highlights and badges
- Photo frames and filters
- Texture overlays on notes sections
- Custom bullet points

### Other Components
Components can access the theme through the `useItinerary` hook:

```typescript
const { theme } = useItinerary();

// Use theme properties
const primaryColor = theme?.colors.primary || 'cyan';
const activityIcon = theme?.icons.activities.food || '🍽️';
```

## Best Practices

1. **Color Usage**: Use Tailwind color names that exist in the default palette
2. **Animations**: Keep animations subtle and performant
3. **Textures**: Use low-opacity patterns to maintain readability
4. **Photos**: Ensure filters don't obscure important details
5. **Icons**: Choose emojis that render well across platforms
6. **Accessibility**: Maintain proper contrast ratios in all themes

## Future Enhancements

- Theme preview in trip creation
- User-customizable themes
- Seasonal theme variations
- Time-of-day theme adjustments
- Theme marketplace for sharing custom themes
