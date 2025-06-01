export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'food' | 'activity' | 'travel' | 'accommodation';
  options?: Activity[];
  highlights?: string[];
  notes?: string[];
  photos?: string[];
  mapUrl?: string;
  location?: string;
}

export interface Day {
  id: string;
  date: string;
  title: string;
  attendees: string[];
  activities: Activity[];
  hype: string;
  quickFacts: string[];
}

export const itineraryData: Day[] = [
  {
    id: "friday",
    date: "2025-06-06",
    title: "Family Landing Day",
    attendees: ["Kyle", "Yury", "Andrew", "Leo", "Nikki", "Shawn", "Lady Jae"],
    hype: "🏖️ Unpack, stretch across the marsh boardwalk, crush beach-view tacos at KoKo Cabana, and chase the sunset to Oak Island Lighthouse before butter-pecan scoops.",
    quickFacts: [
      "4pm house check-in / bunk pick",
      "Scenic Marsh Walkway group selfie",
      "KoKo Cabana island bowls & kids' tenders",
      "Sunset lighthouse pic",
      "Lil & John's Sweetreat cones"
    ],
    activities: [
      {
        id: "f0",
        time: "14:00",
        title: "Early Beach Play (Optional)",
        description: "For families arriving early - hit the beach! Kids can build sandcastles and splash in the waves while adults set up beach chairs and relax. Beach access right at 16th Pl E.",
        type: "activity",
        photos: ["oki25/kyle-family.jpg", "oki25/oak-island-beach-1.webp", "oki25/oak-island-beach-4.webp"],
        mapUrl: "https://maps.google.com/?q=Oak+Island+Beach+Access,+16th+Pl+E",
        highlights: ["Sandcastles", "Wave jumping", "Beach chairs"],
        notes: ["Optional for early arrivals", "Beach toys in garage", "Don't forget sunscreen!"]
      },
      {
        id: "f1",
        time: "15:30",
        title: "Beach House Arrival & Check-in",
        description: "Early-birds arrive at the house – 203 16th Pl E. Kyle may reach the island first. Official check-in is at 4pm. Lockbox code will be in the group text. Check-out is at 10am on Sunday - we'll need to throw away our trash before leaving.",
        type: "accommodation",
        photos: ["oki25/oak-island-house-1.webp", "oki25/oak-island-house-2.webp", "oki25/oak-island-house-3.webp", "oki25/oak-island-house-6.webp", "oki25/oak-island-house-7.webp"],
        mapUrl: "https://maps.google.com/?q=203+16th+Pl+E,+Oak+Island,+NC",
        notes: ["Check-in: 4pm", "Check-out: 10am Sunday", "Lockbox code in group text", "Login info available 48 hours before"]
      },

      {
        id: "f3",
        time: "16:15",
        title: "Scenic Marsh Walkway",
        description: "5-min stroll behind 9th St. Flat boardwalk; great first group photo with egrets in background.",
        type: "activity",
        photos: ["oki25/scenic-marsh-walkway-1.webp", "oki25/scenic-marsh-walkway-2.webp"],
        mapUrl: "https://maps.google.com/?q=Scenic+Marsh+Walkway,+Oak+Island,+NC",
        highlights: ["Group photo spot", "Egret watching", "5-minute walk"]
      },
      {
        id: "f4",
        time: "17:15",
        title: "Dinner at KoKo Cabana",
        description: "Beach-view dinner with 8 outdoor tables + kids' menu. Call ahead for party of 8.",
        type: "food",
        location: "705 Ocean Dr",
        mapUrl: "https://maps.google.com/?q=KoKo+Cabana,+705+Ocean+Dr,+Oak+Island,+NC",
        photos: ["oki25/koko-cabana-menu-1.webp", "oki25/koko-cabana-menu-2.webp", "oki25/koko-cabana-menu-3.webp"],
        highlights: ["Beach views", "Outdoor seating", "Kids menu"],
        notes: ["Call ahead for party of 8", "8 outdoor tables available"],
        options: [
          {
            id: "f4-1",
            time: "17:30",
            title: "Grouper Bites",
            description: "Perfect for sharing - crispy fried local grouper",
            type: "food",
            photos: ["oki25/koko-cabana-menu-1.webp"]
          },
          {
            id: "f4-2",
            time: "17:30",
            title: "Island Bowls",
            description: "Fresh tropical bowls for the adults",
            type: "food",
            photos: ["oki25/koko-cabana-menu-2.webp"]
          },
          {
            id: "f4-3",
            time: "17:30",
            title: "Kids' Chicken Tenders",
            description: "Classic chicken tenders & fries for Andrew & Leo",
            type: "food",
            photos: ["oki25/koko-cabana-menu-3.webp"]
          }
        ]
      },
      {
        id: "f5",
        time: "19:00",
        title: "Oak Island Lighthouse Stop",
        description: "10-min drive east. Grounds open at dusk; interior tours Saturday a.m. only. Perfect for a family sunset selfie.",
        type: "activity",
        photos: ["oki25/lighthouse-1.webp"],
        mapUrl: "https://maps.google.com/?q=Oak+Island+Lighthouse,+NC",
        highlights: ["Sunset photos", "10-min drive", "Grounds open at dusk"],
        notes: ["Interior tours Saturday morning only"]
      },
      {
        id: "f6",
        time: "19:45",
        title: "Ice Cream at Lil & John's Sweetreat",
        description: "Try butter-pecan + birthday-cake swirl; open till 10pm.",
        type: "food",
        location: "6324 E Oak Island Dr",
        photos: ["oki25/sweet-treats-1.webp", "oki25/sweet-treats-2.webp", "oki25/sweet-treats-3.webp"],
        mapUrl: "https://maps.google.com/?q=Lil+Johns+Sweetreat,+6324+E+Oak+Island+Dr",
        highlights: ["Butter pecan", "Birthday cake swirl", "Open till 10pm"]
      },
      {
        id: "f7",
        time: "20:30",
        title: "Evening Prep & Early to Bed",
        description: "Get to bed early tonight - we're getting up early tomorrow for the sunrise at 6:01am! If you plan to go to Bagel Dock, we'll need to leave by 7:15am to make it in time.",
        type: "activity",
        photos: ["oki25/beach-sunset-1.webp", "oki25/beach-sunset-2.webp"],
        notes: [
          "Set sunrise alarms for 6:01am",
          "Early departure at 7:15am for Bagel Dock",
          "Get a good night's rest!"
        ]
      }
    ]
  },
  {
    id: "saturday",
    date: "2025-06-07",
    title: "Sunrise, Sand-Letters & Seafood Boil",
    attendees: ["Kyle", "Yury", "Andrew", "Leo", "Lady Jae", "Shawn", "Nikki"],
    hype: "🌅 Begin with pastel skies, pick up Calabash's legendary bagels, walk the wide-open shore to Kindred Spirit Mailbox, and honor Nana with sand-dollar keepsakes before a shrimp-boil feast at home.",
    quickFacts: [
      "6:01am sunrise on beach",
      "Bagel Dock Café dozen to fuel the day",
      "1.4mi Bird Island trek to Kindred Spirit Mailbox",
      "Sand-dollar memory tree + ash-scattering ceremony",
      "5:30pm Outer Banks Boil Co. cooks on the patio"
    ],
    activities: [
      {
        id: "s1",
        time: "05:45",
        title: "Sunrise Beach Walk",
        description: "Sunrise stroll from Airbnb to beach (access at 16th Pl. E.). Sky glows by 6:01am—bring coffee, sand dollars, camera.",
        type: "activity",
        photos: ["oki25/oak-island-sunrise.webp", "oki25/oak-island-beach-3.webp"],
        highlights: ["6:01am sunrise", "2-block walk", "Bring coffee"],
        notes: ["Low tide 5:48am - perfect for shell hunting"]
      },
      {
        id: "s2",
        time: "07:15",
        title: "Drive to Calabash for Bagels",
        description: "Load both cars; depart for Calabash bagels. NC-179 marsh route—little traffic this early.",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=Calabash,+NC",
        notes: ["32 miles, 45 minutes", "Take NC-179 marsh route"]
      },
      {
        id: "s3",
        time: "08:00",
        title: "The Original FAMOUS Bagel Dock Café",
        description: "Order: Lox-egg-cheddar 'everything,' cinnamon-raisin w/ walnut schmear. Grab extra dozen for later.",
        type: "food",
        location: "1162 River Rd, Calabash",
        photos: ["oki25/bagel-dock-menu-1.webp", "oki25/bagel-dock-menu-2.webp"],
        mapUrl: "https://maps.google.com/?q=Bagel+Dock+Cafe,+1162+River+Rd,+Calabash,+NC",
        highlights: ["Famous bagels", "Call ahead for dozens", "Free coloring books for kids"],
        notes: ["Call (910) 575-1200 Friday 2-4pm to reserve dozens"],
        options: [
          {
            id: "s3-1",
            time: "08:00",
            title: "Lox-Egg-Cheddar Everything",
            description: "The ultimate breakfast bagel sandwich",
            type: "food",
            photos: ["oki25/bagel-dock-menu-1.webp"]
          },
          {
            id: "s3-2",
            time: "08:00",
            title: "Cinnamon-Raisin with Walnut Schmear",
            description: "Sweet and nutty perfection",
            type: "food",
            photos: ["oki25/bagel-dock-menu-2.webp"]
          }
        ]
      },
      {
        id: "s4",
        time: "08:45",
        title: "Drive to Sunset Beach Parking",
        description: "Drive to Sunset Beach West-End Parking (W 40th St.). $10 meter by app; restrooms at pier before trail.",
        type: "travel",
        photos: ["oki25/sunset-beach-parking.webp"],
        mapUrl: "https://maps.google.com/?q=W+40th+St,+Sunset+Beach,+NC",
        notes: ["5 miles, 10 minutes", "$10 parking via Passport app", "Last restrooms at pier"]
      },
      {
        id: "s5",
        time: "09:05",
        title: "Walk to Kindred Spirit Mailbox",
        description: "1.4 mile walk each way to Bird Island. Flat sand; stroller-friendly when tide is low.",
        type: "activity",
        photos: ["oki25/kindred-spirit-1.webp", "oki25/kindred-spirit-2.webp"],
        mapUrl: "https://maps.google.com/?q=Kindred+Spirit+Mailbox,+Bird+Island,+NC",
        highlights: ["1.4 mile beach walk", "Bring water & hats", "Stroller-friendly at low tide"]
      },
      {
        id: "s6",
        time: "10:15",
        title: "Memorial Moment",
        description: "Hang sand-dollar ornaments on the cedar 'Memory Tree,' read a note aloud, scatter Nana's ashes at waterline.",
        type: "activity",
        photos: ["oki25/kindred-spirit-3.webp"],
        notes: [
          "Bring biodegradable urn",
          "Sand dollars with Sharpies"
        ],
        highlights: ["Cedar memory tree", "Sand dollar keepsakes", "Waterline ceremony"]
      },

      {
        id: "s8",
        time: "10:45",
        title: "Optional Lunch at Inlet View Bar & Grill",
        description: "Shrimp tacos / hush-puppies on three-story deck; quick service if sisters need to head to airport.",
        type: "food",
        location: "898 Varnamtown Rd",
        photos: ["oki25/inlet-view-menu-1.webp", "oki25/inlet-view-menu-2.webp", "oki25/inlet-view-menu-3.webp"],
        mapUrl: "https://maps.google.com/?q=Inlet+View+Bar+Grill,+898+Varnamtown+Rd",
        highlights: ["Three-story deck", "Quick service", "Kids grilled cheese"],
        notes: ["Entry stairs only - park stroller below", "Kids meals come with hush puppies"]
      },
      {
        id: "s9",
        time: "12:45",
        title: "Return to Oak Island",
        description: "Return to Oak Island Airbnb. Coolers & beach toys from porch onto sand.",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=203+16th+Pl+E,+Oak+Island,+NC",
        notes: ["32 miles, 45 minutes back"]
      },
      {
        id: "s10",
        time: "13:30",
        title: "Free Ocean Play & Chill",
        description: "Kids boogie-board; adults nap. Put leftover bagels & fruit on kitchen island for grazing. Watch out for crocodiles on the beach!",
        type: "activity",
        photos: ["oki25/beach-1.webp"],
        highlights: ["3+ hours beach time", "Boogie boards", "Bagel grazing station"],
        notes: ["Watch out for crocodiles on the beach!"]
      },
      {
        id: "s11",
        time: "17:30",
        title: "Pick Up Outer Banks Boil Company",
        description: "Drive to Outer Banks Boil Company to pick up our seafood boil for 5 adults. The order includes shrimp, corn, potatoes, sausage, coleslaw, and cornbread. Remember to bring tablecloth and plates if they have them. Total will be around $150-200. Nikki also ordered a dozen mussels. No extras specifically for kids, but we can order items when picking up.",
        type: "food",
        location: "Outer Banks Boil Company",
        photos: ["oki25/outer-banks-boil-co-1.webp"],
        mapUrl: "https://maps.google.com/?q=Outer+Banks+Boil+Company,+Oak+Island,+NC",
        notes: [
          "Pick up for 5 adults",
          "Includes coleslaw & cornbread",
          "Get tablecloth & plates",
          "Pay there: ~$150-200",
          "Nikki ordered dozen mussels",
          "Can order kids items when picking up"
        ]
      },
      {
        id: "s12",
        time: "17:45",
        title: "Cook & Enjoy Seafood Boil at House",
        description: "Cook the seafood boil on the stove at the house. It'll be 1-2 buckets, each needing 2 cups of liquid (water, wine, or beer). Takes 30-45 minutes to cook. Once done, feast! Maybe we can go around the table and share what we appreciate about North Carolina.",
        type: "food",
        photos: ["oki25/seafood-boil-1.webp", "oki25/seafood-boil-2.webp", "oki25/seafood-boil-3.webp", "oki25/seafood-boil-4.webp", "oki25/seafood-boil-5.webp", "oki25/seafood-boil-6.webp"],
        highlights: ["Cook on stove 30-45 min", "2 cups liquid per bucket", "Share NC appreciation"],
        notes: ["Use water, wine, or beer for cooking", "Round table: what we love about North Carolina"]
      },
      {
        id: "s13",
        time: "19:30",
        title: "Evening at Leisure",
        description: "Enjoy the sunset on the beach or maybe head to OKI Donuts for ice cream. They're open in the evening and have delicious ice cream options!",
        type: "activity",
        photos: ["oki25/beach-sunset-1.webp", "oki25/beach-sunset-2.webp"],
        notes: ["Watch sunset on beach", "Optional: OKI Donuts for ice cream"],
        options: [
          {
            id: "s13-1",
            time: "19:30",
            title: "Beach Sunset",
            description: "Watch the sunset from the beach - perfect photo opportunity",
            type: "activity",
            photos: ["oki25/beach-sunset-1.webp", "oki25/beach-sunset-2.webp"]
          },
          {
            id: "s13-2",
            time: "20:00",
            title: "OKI Donuts Ice Cream",
            description: "Head to OKI Donuts for evening ice cream treats",
            type: "food",
            photos: ["oki25/oki-donuts-1.webp"],
            mapUrl: "https://maps.google.com/?q=OKI+Scoop+Shop,+6120+E+Oak+Island+Dr"
          }
        ]
      }
    ]
  },
  {
    id: "sunday",
    date: "2025-06-08",
    title: "Sprinkles & Homeward Roll",
    attendees: ["Kyle", "Yury", "Andrew", "Leo", "Lady Jae", "Shawn", "Nikki"],
    hype: "🍩 One last dunk in powdered sugar, a proper espresso in Southport, and the caravan heads north with smiles—and maybe a maple-bacon doughnut riding shotgun.",
    quickFacts: [
      "OKI Scoop Shop doughnut dozen (maple-bacon!)",
      "Bag-drop & key return by 11am",
      "Southport Coffee Co. smoked-salmon bagel & dark-roast",
      "Wheels north; Mooresville ETA ~3pm"
    ],
    activities: [
      {
        id: "u1",
        time: "06:15",
        title: "Optional Last Sunrise",
        description: "Last sunrise stroll—step onto the beach at 6:02am for a quick farewell photo.",
        type: "activity",
        photos: ["oki25/oak-island-sunrise.webp"],
        notes: ["Optional activity", "6:02am sunrise", "Quick farewell photo"]
      },
      {
        id: "u2",
        time: "07:00",
        title: "OKI Scoop Shop & Donuts (Optional)",
        description: "Optional stop - Pick up a dozen maple-bacon & strawberry sprinkle for the car. They brew basic drip if you need an early hit.",
        type: "food",
        location: "6120 E Oak Island Dr",
        mapUrl: "https://maps.google.com/?q=OKI+Scoop+Shop,+6120+E+Oak+Island+Dr",
        photos: ["oki25/oki-donuts-1.webp", "oki25/oki-donuts-3.webp"],
        highlights: ["Maple-bacon donuts", "Fresh at 7am & 8:30am", "Basic coffee available"],
        notes: ["Optional stop", "Maple-bacon sells out first", "Bring punch card for free 10th donut"]
      },
      {
        id: "u3",
        time: "07:30",
        title: "Pack & Clean",
        description: "Time to pack up and say goodbye to the beach house! Remember it's vacation - so we're keeping checkout simple. **Check out is by 10am SHARP** - there's a $100 per half hour late fee during busy season, so let's get moving!",
        type: "activity",
        highlights: ["10am sharp checkout", "$100/half hour late fee", "Keep it simple - it's vacation!"],
        notes: [
          "• DO NOT strip beds - just leave them unmade",
          "• Gather all used towels",
          "• Put towels in washer with detergent",
          "• Press start on washer as you walk out",
          "• Empty fridge completely",
          "• Take all trash to outdoor garbage cans",
          "• Hand wash or start dishwasher if dirty dishes",
          "• Turn off all lights",
          "• Lock all doors"
        ]
      },
      {
        id: "u4",
        time: "09:20",
        title: "Caravan to Southport",
        description: "20 min north to Southport for better coffee & breakfast sammies. Easy parking on N Howe before crowds.",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=Southport,+NC",
        notes: ["11 miles, 20 minutes", "Park on N Howe St"]
      },
      {
        id: "u5",
        time: "09:40",
        title: "Southport Coffee Co. & Kitchen",
        description: "To-go orders for the road. Dark-roast beans roasted in-house Fridays; buy 1-lb bag for gifts.",
        type: "food",
        location: "109 W. Brown St",
        photos: ["oki25/southport-coffee-menu-1.webp", "oki25/southport-coffee-menu-2.webp", "oki25/southport-coffee-menu-3.webp"],
        mapUrl: "https://maps.google.com/?q=Southport+Coffee+Co,+109+W+Brown+St",
        highlights: ["Free Sunday parking", "In-house roasted beans", "Great to-go options"],
        options: [
          {
            id: "u5-1",
            time: "09:40",
            title: "Smoked-Salmon Bagel",
            description: "Perfect for Lady Jae - fresh and flavorful",
            type: "food",
            photos: ["oki25/southport-coffee-menu-1.webp"]
          },
          {
            id: "u5-2",
            time: "09:40",
            title: "Avocado-Egg Ciabatta",
            description: "Nikki's favorite - hearty and healthy",
            type: "food",
            photos: ["oki25/southport-coffee-menu-2.webp"]
          },
          {
            id: "u5-3",
            time: "09:40",
            title: "Ham & Cheddar Croissants",
            description: "Kid-friendly option for Andrew & Leo",
            type: "food",
            photos: ["oki25/southport-coffee-menu-3.webp"]
          }
        ]
      },
      {
        id: "u5b",
        time: "09:40",
        title: "Alternative: Old Bridge Diner",
        description: "If the group prefers a full sit-down breakfast instead of coffee shop to-go, Old Bridge Diner is a classic option with hearty breakfast plates.",
        type: "food",
        photos: ["oki25/old-bridge-diner-1.webp", "oki25/old-bridge-diner-2.webp"],
        mapUrl: "https://maps.google.com/?q=Old+Bridge+Diner,+Southport,+NC",
        highlights: ["Classic diner fare", "Full breakfast menu", "Family-friendly"],
        notes: ["Alternative to Southport Coffee", "Better for sit-down meal"]
      },
      {
        id: "u6",
        time: "10:30",
        title: "Final Prep & Gas",
        description: "Final restroom break, gas top-up at Circle K. Start playlists / audiobooks.",
        type: "activity",
        mapUrl: "https://maps.google.com/?q=Circle+K,+Southport,+NC",
        notes: ["Restroom break", "Gas up at Circle K", "Queue entertainment for drive"]
      },
      {
        id: "u7",
        time: "11:00",
        title: "Hit the Road Home",
        description: "Southport → Mooresville via US-17 N → I-140 → I-40 W → I-77 N. ETA home around 3pm with one stretch stop.",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=Mooresville,+NC",
        notes: ["220 miles, ~3h 45m", "Optional stops: Buc-ee's Florence or Books & Beans Camden"]
      }
    ]
  }
];
