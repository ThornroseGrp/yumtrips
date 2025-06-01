// Theme system for Yumtrips
// Each theme transforms the entire visual experience to match the destination

export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  
  // Color System
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
    headerGradient?: string;
    highlights?: string[];
  };
  
  // Typography
  typography: {
    headingFont?: string; // e.g., 'serif', 'sans-serif', custom font
    bodyFont?: string;
    decorativeFont?: string; // For special elements
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  };
  
  // Icons & Emojis
  icons: {
    primary: string; // Main emoji/icon for the theme
    secondary: string[]; // Supporting icons
    bulletPoint: string; // For lists
    activities: {
      food: string;
      activity: string;
      travel: string;
      accommodation: string;
    };
  };
  
  // Visual Effects
  effects: {
    animations?: string[]; // CSS animation classes
    textures?: string[]; // Background textures
    patterns?: string[]; // Decorative patterns
    shadows?: string; // Custom shadow styles
    borders?: string; // Border styles
  };
  
  // Photo Display
  photoStyle: {
    frame?: 'none' | 'polaroid' | 'vintage' | 'modern' | 'ornate' | 'rustic';
    filter?: string; // CSS filter for photos
    borderRadius?: string;
    overlay?: string; // Overlay effect
  };
  
  // Interactive Elements
  interactive: {
    hoverEffect?: string;
    clickAnimation?: string;
    transitions?: string;
  };
  
  // Decorative Elements
  decorations: {
    dividers?: string; // Between sections
    backgrounds?: string[]; // Background patterns/images
    accents?: string[]; // Small decorative elements
    weatherWidget?: string; // Special weather styling
  };
}

// Predefined themes
export const themes: Record<string, ThemeConfig> = {
  // Ocean/Beach Theme (current OKI)
  ocean: {
    id: 'ocean',
    name: 'Ocean Breeze',
    description: 'Waves, sand, and endless summer',
    colors: {
      primary: 'cyan',
      secondary: 'blue',
      accent: 'orange',
      gradient: 'from-cyan-500 to-blue-600',
      highlights: ['amber', 'teal', 'sky']
    },
    typography: {
      headingFont: 'sans-serif',
      textTransform: 'none'
    },
    icons: {
      primary: '🌊',
      secondary: ['🏖️', '🌅', '🐚', '🏄‍♂️'],
      bulletPoint: '🌊',
      activities: {
        food: '🦐',
        activity: '🏖️',
        travel: '🚗',
        accommodation: '🏠'
      }
    },
    effects: {
      animations: ['wave', 'float'],
      textures: ['sand-texture'],
      shadows: 'ocean-shadow',
      borders: 'wave-border'
    },
    photoStyle: {
      frame: 'polaroid',
      borderRadius: '0.5rem',
      filter: 'brightness(1.05) saturate(1.1)'
    },
    interactive: {
      hoverEffect: 'hover:scale-105',
      transitions: 'transition-all duration-300'
    },
    decorations: {
      dividers: 'wave-divider',
      backgrounds: ['beach-pattern'],
      accents: ['seashell', 'starfish'],
      weatherWidget: 'beach-weather'
    }
  },

  // Historic City Theme (current Charleston)
  charleston: {
    id: 'charleston',
    name: 'Southern Charm',
    description: 'Historic elegance with pastel grace',
    colors: {
      primary: 'violet',
      secondary: 'rose',
      accent: 'teal',
      gradient: 'from-violet-600 to-rose-500',
      headerGradient: 'charleston-header-gradient',
      highlights: ['lavender', 'blush', 'mint']
    },
    typography: {
      headingFont: 'serif',
      decorativeFont: 'cursive',
      textTransform: 'none'
    },
    icons: {
      primary: '🌳',
      secondary: ['🏛️', '👻', '🦐', '🌸'],
      bulletPoint: '🌳',
      activities: {
        food: '🦪',
        activity: '🏛️',
        travel: '🚗',
        accommodation: '🏨'
      }
    },
    effects: {
      animations: ['rainbow-shift', 'trot'],
      textures: ['cobblestone-texture', 'tree-canopy'],
      shadows: 'charleston-shadow',
      borders: 'carriage-border'
    },
    photoStyle: {
      frame: 'vintage',
      borderRadius: '0.75rem',
      filter: 'sepia(0.1) contrast(1.05)'
    },
    interactive: {
      hoverEffect: 'hover:shadow-lg',
      transitions: 'transition-all duration-500'
    },
    decorations: {
      dividers: 'wrought-iron',
      backgrounds: ['rainbow-row-gradient'],
      accents: ['moss', 'ironwork'],
      weatherWidget: 'garden-weather'
    }
  },

  // Tuscany Theme
  tuscany: {
    id: 'tuscany',
    name: 'Tuscan Sun',
    description: 'Rolling hills and rustic charm',
    colors: {
      primary: 'amber',
      secondary: 'stone',
      accent: 'olive',
      gradient: 'from-amber-500 to-yellow-600',
      highlights: ['terracotta', 'sage', 'wine']
    },
    typography: {
      headingFont: 'serif',
      decorativeFont: 'italic serif',
      textTransform: 'none'
    },
    icons: {
      primary: '🌻',
      secondary: ['🍇', '🫒', '🍷', '🏺'],
      bulletPoint: '🫒',
      activities: {
        food: '🍝',
        activity: '🏛️',
        travel: '🛵',
        accommodation: '🏡'
      }
    },
    effects: {
      animations: ['gentle-sway'],
      textures: ['tuscan-plaster', 'vineyard-rows'],
      shadows: 'warm-shadow',
      borders: 'rustic-border'
    },
    photoStyle: {
      frame: 'rustic',
      borderRadius: '0.25rem',
      filter: 'sepia(0.2) saturate(1.2) contrast(1.1)'
    },
    interactive: {
      hoverEffect: 'hover:brightness-110',
      transitions: 'transition-all duration-700'
    },
    decorations: {
      dividers: 'grape-vine',
      backgrounds: ['tuscan-hills'],
      accents: ['olive-branch', 'sunflower'],
      weatherWidget: 'vineyard-weather'
    }
  },

  // Mountain/Alpine Theme
  alpine: {
    id: 'alpine',
    name: 'Mountain Majesty',
    description: 'Peaks, pines, and pure air',
    colors: {
      primary: 'emerald',
      secondary: 'slate',
      accent: 'sky',
      gradient: 'from-emerald-600 to-teal-700',
      highlights: ['pine', 'snow', 'stone']
    },
    typography: {
      headingFont: 'sans-serif',
      textTransform: 'uppercase'
    },
    icons: {
      primary: '🏔️',
      secondary: ['🌲', '⛷️', '🦌', '🏕️'],
      bulletPoint: '🌲',
      activities: {
        food: '🫕',
        activity: '⛷️',
        travel: '🚡',
        accommodation: '🛖'
      }
    },
    effects: {
      animations: ['snow-fall', 'pine-sway'],
      textures: ['wood-grain', 'mountain-mist'],
      shadows: 'mountain-shadow',
      borders: 'timber-border'
    },
    photoStyle: {
      frame: 'modern',
      borderRadius: '0',
      filter: 'contrast(1.1) brightness(1.05)'
    },
    interactive: {
      hoverEffect: 'hover:-translate-y-1',
      transitions: 'transition-transform duration-200'
    },
    decorations: {
      dividers: 'pine-branch',
      backgrounds: ['mountain-range'],
      accents: ['pinecone', 'snowflake'],
      weatherWidget: 'alpine-weather'
    }
  },

  // Tropical Paradise Theme
  tropical: {
    id: 'tropical',
    name: 'Island Paradise',
    description: 'Palm trees and paradise',
    colors: {
      primary: 'lime',
      secondary: 'pink',
      accent: 'turquoise',
      gradient: 'from-lime-400 to-emerald-500',
      highlights: ['coral', 'aqua', 'mango']
    },
    typography: {
      headingFont: 'sans-serif',
      decorativeFont: 'playful',
      textTransform: 'none'
    },
    icons: {
      primary: '🌴',
      secondary: ['🦜', '🌺', '🥥', '🍹'],
      bulletPoint: '🌺',
      activities: {
        food: '🍹',
        activity: '🏄',
        travel: '🛶',
        accommodation: '🏝️'
      }
    },
    effects: {
      animations: ['palm-sway', 'tropical-breeze'],
      textures: ['bamboo', 'tropical-leaves'],
      shadows: 'tropical-shadow',
      borders: 'bamboo-border'
    },
    photoStyle: {
      frame: 'none',
      borderRadius: '1rem',
      filter: 'saturate(1.2) brightness(1.1)'
    },
    interactive: {
      hoverEffect: 'hover:rotate-1',
      transitions: 'transition-all duration-500'
    },
    decorations: {
      dividers: 'tropical-flowers',
      backgrounds: ['palm-pattern'],
      accents: ['hibiscus', 'parrot'],
      weatherWidget: 'tropical-weather'
    }
  },

  // Desert/Southwest Theme
  desert: {
    id: 'desert',
    name: 'Desert Dreams',
    description: 'Cacti, canyons, and endless skies',
    colors: {
      primary: 'orange',
      secondary: 'red',
      accent: 'turquoise',
      gradient: 'from-orange-500 to-red-600',
      highlights: ['sand', 'terracotta', 'sage']
    },
    typography: {
      headingFont: 'serif',
      textTransform: 'none'
    },
    icons: {
      primary: '🌵',
      secondary: ['🦎', '☀️', '🏜️', '🦅'],
      bulletPoint: '🌵',
      activities: {
        food: '🌮',
        activity: '🏜️',
        travel: '🚙',
        accommodation: '🏕️'
      }
    },
    effects: {
      animations: ['heat-shimmer', 'tumble-weed'],
      textures: ['sand-dunes', 'adobe-wall'],
      shadows: 'desert-shadow',
      borders: 'pueblo-border'
    },
    photoStyle: {
      frame: 'rustic',
      borderRadius: '0.25rem',
      filter: 'sepia(0.1) contrast(1.2)'
    },
    interactive: {
      hoverEffect: 'hover:shadow-xl',
      transitions: 'transition-shadow duration-300'
    },
    decorations: {
      dividers: 'desert-pattern',
      backgrounds: ['canyon-silhouette'],
      accents: ['cactus-flower', 'roadrunner'],
      weatherWidget: 'desert-weather'
    }
  },

  // Urban/City Theme
  urban: {
    id: 'urban',
    name: 'City Lights',
    description: 'Skylines and street art',
    colors: {
      primary: 'zinc',
      secondary: 'violet',
      accent: 'yellow',
      gradient: 'from-zinc-700 to-slate-900',
      highlights: ['neon-pink', 'electric-blue', 'lime']
    },
    typography: {
      headingFont: 'sans-serif',
      decorativeFont: 'mono',
      textTransform: 'uppercase'
    },
    icons: {
      primary: '🏙️',
      secondary: ['🚇', '🎭', '🍕', '🎨'],
      bulletPoint: '▪️',
      activities: {
        food: '🍕',
        activity: '🎭',
        travel: '🚇',
        accommodation: '🏨'
      }
    },
    effects: {
      animations: ['neon-flicker', 'city-pulse'],
      textures: ['concrete', 'brick-wall'],
      shadows: 'neon-glow',
      borders: 'industrial-border'
    },
    photoStyle: {
      frame: 'modern',
      borderRadius: '0',
      filter: 'contrast(1.2) saturate(0.9)'
    },
    interactive: {
      hoverEffect: 'hover:scale-102',
      transitions: 'transition-all duration-200'
    },
    decorations: {
      dividers: 'subway-line',
      backgrounds: ['city-grid'],
      accents: ['graffiti', 'traffic-light'],
      weatherWidget: 'urban-weather'
    }
  }
};

// Helper function to get theme
export function getTheme(themeId: string): ThemeConfig {
  return themes[themeId] || themes.ocean;
}

// Helper to apply theme classes
export function getThemeClasses(theme: ThemeConfig, element: string): string {
  switch (element) {
    case 'header':
      return theme.colors.headerGradient || `bg-gradient-to-r ${theme.colors.gradient}`;
    case 'card':
      return `${theme.effects.shadows} ${theme.effects.borders}`;
    case 'photo':
      return `${theme.photoStyle.frame}-frame filter ${theme.photoStyle.filter}`;
    case 'interactive':
      return `${theme.interactive.hoverEffect} ${theme.interactive.transitions}`;
    default:
      return '';
  }
}
