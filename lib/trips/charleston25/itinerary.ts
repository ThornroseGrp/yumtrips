import { type Day, type Activity } from '@/lib/itinerary-data';

// Charleston Historic Adventure & Beach Run - June 4-6, 2025
export const charleston25Itinerary: Day[] = [
  {
    id: "wednesday",
    date: "2025-06-04",
    title: "Forest Cathedrals & Pasta Under the Palms",
    attendees: ["Lady Jae", "Nikki", "Shawn"],
    hype: "🌳 Swap city asphalt for hush-hush swamps, photograph a 400-year-old oak in golden light, and twirl handmade pappardelle before your head ever hits the pillow.",
    quickFacts: [
      "10am depart Mooresville",
      "Chef-driven brunch at smallSUGAR (Columbia)",
      "2.6-mile Congaree boardwalk beneath 130-ft loblollies",
      "Check-in at lakeside Andell Inn (3:30pm hard target)",
      "Late-afternoon awe at Angel Oak Tree (last gate 4:50pm)",
      "Burrata & bolognese at Wild Olive"
    ],
    activities: [
      {
        id: "w1",
        time: "10:00",
        title: "Depart Mooresville",
        description: "Hit the road with coffee in hand! I-77 S → I-26 E; allow ~2h 5m for the drive to Columbia.",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=Columbia,+SC",
        notes: ["Pack bug spray + sunhat in daypack", "Road trip playlist ready!"]
      },
      {
        id: "w2",
        time: "12:05",
        title: "Lunch at smallSUGAR",
        description: "Chef-driven brunch in Columbia. Order the Shakshuka Toast, Lavender Latte, and Seasonal Grain Bowl. This trendy spot is open 7am-3pm, so our noon arrival is perfectly timed.",
        type: "food",
        location: "709 Gervais St., Columbia",
        photos: ["charleston25/smallsugar-menu-1.webp", "charleston25/smallsugar-menu-2.webp"],
        mapUrl: "https://maps.app.goo.gl/T9SyJADhEXuwfYgi7",
        highlights: ["Shakshuka Toast", "Lavender Latte", "Seasonal Grain Bowl"],
        notes: [
          "Online wait-list via Yelp opens 9am—add name 30 min out",
          "Metered street parking on Gervais is credit-card only",
          "Pastry case sells out by noon; snag a ginger buckeye to go",
          "Plan B: Devine Cinnamon Roll Deli (7am-2pm) if traffic delays"
        ]
      },
      {
        id: "w3",
        time: "12:50",
        title: "Drive to Congaree National Park",
        description: "Quick 30-minute drive following Bluff Rd → Old Bluff Rd to reach the visitor center.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/JKFK72tVNGCTLWRU8",
        notes: ["18 miles, ~30 minutes"]
      },
      {
        id: "w4",
        time: "13:20",
        title: "Congaree Boardwalk Loop Trail",
        description: "Experience the cathedral-like canopy of 130-foot loblolly pines on this flat, shaded 2.6-mile boardwalk through old-growth forest. Perfect for photos and peaceful wandering.",
        type: "activity",
        photos: ["charleston25/congaree-1.webp", "charleston25/congaree-2.webp", "charleston25/congaree-3.webp"],
        mapUrl: "https://maps.app.goo.gl/JKFK72tVNGCTLWRU8",
        highlights: ["2.6-mile flat boardwalk", "130-ft loblolly pines", "Old-growth forest"],
        notes: [
          "Visitor-center restrooms & bug-spray station—use both!",
          "Low boardwalk spur (1 mi) is faster if behind schedule",
          "Cell service dies past first bend—download trail map",
          "Mosquitos legendary after rain"
        ]
      },
      {
        id: "w5",
        time: "14:20",
        title: "Drive to Andell Inn",
        description: "Hit the road for Johns Island! Take the turnpike via I-26 E → US-17 S for about 1h 40m. Our 3:30pm arrival target gives us a buffer before Angel Oak closes.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/6xdBeakMLZ28hEHk6",
        notes: ["91 miles, ~1h 40m", "I-26 traffic buffer = leave Congaree by 2:20pm"]
      },
      {
        id: "w6",
        time: "15:30",
        title: "Check-in at Andell Inn",
        description: "Arrive at this lakeside boutique inn in Freshfields Village. Check in (Conf. #79935417), drop bags, and grab a complimentary sweet-tea mocktail in the lobby!",
        type: "accommodation",
        photos: ["charleston25/andell-inn-1.webp", "charleston25/andell-inn-2.webp", "charleston25/andell-inn-room.webp", "charleston25/andell-inn-pool.webp"],
        mapUrl: "https://maps.app.goo.gl/6xdBeakMLZ28hEHk6",
        location: "Freshfields Village, Johns Island",
        highlights: ["Lakeside views", "Sweet-tea mocktails", "Boutique charm"],
        notes: [
          "Confirmation #79935417",
          "Check-in desk will text room-ready alerts; ask for lakeside view",
          "Free parking, but spots fill—use garage if arriving after 5pm"
        ]
      },
      {
        id: "w7",
        time: "15:45",
        title: "Drive to Angel Oak Tree",
        description: "Quick 15-minute hop to see this natural wonder. Free entry, but the gate closes at 4:50pm sharp!",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/vkWAJFmuHc2quFvh9",
        notes: ["7 miles, ~15 minutes"]
      },
      {
        id: "w8",
        time: "16:05",
        title: "Angel Oak Tree Experience",
        description: "Stand in awe under the 65-foot canopy of this 400-year-old Southern live oak. The late afternoon light is perfect for photos. Browse the gift shop before it closes at 5pm.",
        type: "activity",
        photos: ["charleston25/angel-oak-1.webp", "charleston25/angel-oak-2.webp", "charleston25/angel-oak-3.webp"],
        mapUrl: "https://maps.app.goo.gl/vkWAJFmuHc2quFvh9",
        highlights: ["400-year-old tree", "65-ft branching canopy", "Golden hour photos"],
        notes: [
          "Last gate 4:50pm; gift shop closes 5pm sharp",
          "No drones allowed; Rangers will stop you",
          "Bring spare lens cloth—heavy Spanish moss drips pollen"
        ]
      },
      {
        id: "w9",
        time: "16:40",
        title: "Return to Andell Inn",
        description: "Head back to the inn for a quick refresh before dinner.",
        type: "travel",
        notes: ["15-minute drive"]
      },
      {
        id: "w10",
        time: "18:00",
        title: "Dinner at Wild Olive",
        description: "Experience Italian cuisine with a Lowcountry twist. Don't miss the Burrata 'Appalachia,' handmade Pappardelle Bolognese, and Seasonal Vegetable Antipasti. Just 10 minutes from the inn!",
        type: "food",
        location: "2867 Maybank Hwy",
        photos: ["charleston25/wild-olive-menu-1.webp", "charleston25/wild-olive-menu-2.webp", "charleston25/wild-olive-menu-3.webp"],
        mapUrl: "https://maps.app.goo.gl/6WE6ZXx7rQimU6Ux9",
        highlights: ["Burrata 'Appalachia'", "Handmade pappardelle", "Seasonal antipasti"],
        notes: [
          "Reservation recommended",
          "Request 'wine-bar seats' for view of pasta station",
          "Half portions available on any pasta—just ask",
          "Kitchen happy to omit chili flakes for Lady Jae",
          "Less than 10 minutes from inn—no evening traffic stress"
        ]
      },
      {
        id: "w11",
        time: "19:45",
        title: "Evening at Andell Inn",
        description: "Return to the inn for porch rockers or a lakefront stroll. Early lights-out tonight—we have a full Charleston day tomorrow!",
        type: "activity",
        photos: ["charleston25/andell-inn-patio.webp", "charleston25/andell-inn-pool.webp"],
        highlights: ["Porch swings", "Lakefront views", "Sweet dreams"],
        notes: ["Lobby has complimentary cookies until 9pm"]
      }
    ]
  },
  {
    id: "thursday",
    date: "2025-06-05",
    title: "Cobblestones, Raw Bars & Midnight Ghosts",
    attendees: ["Lady Jae", "Nikki", "Shawn"],
    hype: "🦪 Tip-toe through Charleston's ivy cemetery, demolish lobster rolls at 167 Raw, clink charcuterie glasses at a boutique inn, then finish the night inside an 1802 jail—if you dare.",
    quickFacts: [
      "Unitarian Churchyard at 9am (no crowds)",
      "167 Raw Oyster Bar lunch (lobster roll + ceviche)",
      "King Street browse (Blue Bicycle Books, Candlefish)",
      "5pm French Quarter Inn wine & charcuterie (free!)",
      "5:45pm porch dinner at Delaney Oyster House",
      "8pm Bulldog Haunted Jail Tour + 9pm coconut cake"
    ],
    activities: [
      {
        id: "t1",
        time: "07:00",
        title: "Light Breakfast at Andell Inn",
        description: "Grab coffee, fruit, and maybe one hot item from the inn's breakfast—save your real appetite for Charleston's raw bars!",
        type: "food",
        highlights: ["Light bites", "Save appetite", "Coffee to go"]
      },
      {
        id: "t2",
        time: "08:00",
        title: "Drive to Charleston",
        description: "Easy 25-minute drive straight up SC-700/US-17. Valet park at the French Quarter Inn by 8:30am.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/iEt5LUzQdBducD6FA",
        notes: ["25 miles, ~25 minutes"]
      },
      {
        id: "t3",
        time: "08:30",
        title: "Unitarian Church Cemetery",
        description: "Explore Charleston's most photogenic cemetery with its ivy-draped headstones and storybook atmosphere. Gate opens at 9am and closes at 2pm—we'll have it mostly to ourselves this early!",
        type: "activity",
        photos: ["charleston25/charleston-cemetery-1.webp", "charleston25/charleston-cemetery-2.webp"],
        mapUrl: "https://maps.app.goo.gl/mUjDeTZ65kaUyW5x7",
        highlights: ["Ivy-draped headstones", "Philadelphia Alley", "Morning tranquility"],
        notes: [
          "Caretaker unlocks gate right at 9am; arrive 8:55 for empty photos",
          "Pathway bricks are uneven—wear flats, not wedges",
          "0.3 mile walk including Philadelphia Alley"
        ]
      },
      {
        id: "t4",
        time: "10:00",
        title: "Optional Coffee Stop",
        description: "If hunger strikes, Island Provisions (47 Cannon) is a quick walk north for matcha or a chia bowl.",
        type: "food",
        location: "47 Cannon St",
        photos: ["charleston25/island-provisions-menu-1.webp", "charleston25/island-provisions-menu-2.webp"],
        mapUrl: "https://maps.app.goo.gl/NyypFePPK7hHVS6y6",
        highlights: ["Matcha latte", "Chia bowls", "Light snacks"],
        notes: [
          "6 parking spots total—walk or rideshare",
          "Matcha is ceremonial-grade, no added sugar",
          "0.8 mile, 12-min walk north from cemetery"
        ]
      },
      {
        id: "t5",
        time: "10:45",
        title: "Join Wait-list at 167 Raw",
        description: "Head to 167 Raw (193 King) and join their digital wait-list. They open at 11am, and typical weekday wait is 15-30 minutes. Browse nearby shops until your table is ready!",
        type: "activity",
        mapUrl: "https://maps.app.goo.gl/He4b6dXwKeH6g6mJ6",
        notes: [
          "Wait-list link via QR posted at door 10am",
          "Party must stay within two blocks or lose spot",
          "Counter seats have fastest turnover—tell host 'counter is fine'"
        ]
      },
      {
        id: "t6",
        time: "11:00",
        title: "Lunch at 167 Raw Oyster Bar",
        description: "Charleston's premier raw bar! Share the famous lobster roll, sample the ceviche, and try the daily oyster flight. Keep it light—we have more eating ahead!",
        type: "food",
        location: "193 King St",
        photos: ["charleston25/167-raw-menu-1.webp", "charleston25/167-raw-menu-2.webp", "charleston25/167-raw-menu-3.webp"],
        mapUrl: "https://maps.app.goo.gl/He4b6dXwKeH6g6mJ6",
        highlights: ["Half-lobster roll", "Tuna ceviche", "Daily oyster flight"],
        notes: ["Share dishes to keep light", "Ask about daily specials"]
      },
      {
        id: "t7",
        time: "12:20",
        title: "King Street Shopping",
        description: "Stroll King Street from Calhoun to Queen, browsing Charleston's best boutiques and galleries. Don't miss Blue Bicycle Books, Candlefish candle lab, and Hampden Clothing.",
        type: "activity",
        photos: ["charleston25/king-street-1.webp", "charleston25/king-street-2.webp"],
        mapUrl: "https://maps.google.com/?q=King+Street,+Charleston,+SC",
        highlights: ["Blue Bicycle Books", "Candlefish candles", "Local boutiques"],
        notes: [
          "Candlefish workshop candles cure 45 min—pick up before wine hour",
          "Hampden Clothing offers bottled water and A/C chairs for patient dads"
        ]
      },
      {
        id: "t8",
        time: "14:30",
        title: "Return to French Quarter Inn",
        description: "Head back to FQI where your luggage is with the bell desk. Grab an iced tea in the lobby—official room access is at 4pm but lobby lounges are available.",
        type: "accommodation",
        photos: ["charleston25/french-quarter-inn-1.webp", "charleston25/french-quarter-inn-2.webp"],
        mapUrl: "https://maps.app.goo.gl/iEt5LUzQdBducD6FA",
        location: "166 Church St",
        notes: ["Confirmation No. 83785", "Deluxe Market View Terrace Suite"]
      },
      {
        id: "t9",
        time: "16:00",
        title: "Check-in & Wine Reception",
        description: "Check into your room, freshen up, then head to the lobby for the complimentary Wine & Charcuterie Reception. Non-alcoholic options available including sparkling water and kombucha!",
        type: "food",
        photos: ["charleston25/french-quarter-inn-wine.webp", "charleston25/french-quarter-inn-patio.webp"],
        highlights: ["Free charcuterie", "Sparkling water", "Vegan options"],
        notes: [
          "Reception in lobby 5-6pm",
          "Vegan cheese wedges available—ask attendant",
          "Don't over-snack before Delaney!"
        ]
      },
      {
        id: "t10",
        time: "17:30",
        title: "Walk to Delaney Oyster House",
        description: "Easy 10-minute stroll to Delaney's for your 5:45pm porch table reservation.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/yEgqvpeciKz1xVR59",
        notes: ["0.5 mile, ~10 minutes"]
      },
      {
        id: "t11",
        time: "17:45",
        title: "Dinner at Delaney Oyster House",
        description: "Settle onto the jasmine-scented porch for Charleston's best char-grilled oysters, snapper ceviche, and brown-butter crab. Try their zero-proof Sea-Spritz mocktail!",
        type: "food",
        location: "115 Calhoun St",
        photos: ["charleston25/delaney-oyster-menu-1.webp", "charleston25/delaney-oyster-menu-2.webp", "charleston25/delaney-oyster-menu-3.webp"],
        mapUrl: "https://maps.app.goo.gl/yEgqvpeciKz1xVR59",
        highlights: ["Char-grilled oysters", "Snapper ceviche", "Brown-butter crab"],
        notes: [
          "5:45pm porch reservation",
          "Porch fans & misters run—bring light sweater if you chill easily",
          "$1.50 happy-hour littleneck clams end at 6pm; order on arrival"
        ]
      },
      {
        id: "t12",
        time: "19:00",
        title: "Return to Hotel & Change",
        description: "Walk back to FQI and quick change into tour-friendly shoes. Grab just a waist-pack for the ghost tour.",
        type: "activity",
        notes: ["Change to comfortable walking shoes", "Waist-pack only for tour"]
      },
      {
        id: "t13",
        time: "19:25",
        title: "Walk to Old City Jail",
        description: "14-minute walk to Bulldog Tours at the Old City Jail (21 Magazine St). Arrive by 7:45pm for check-in.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/SU5uwan4nUBqwJ86A",
        notes: ["0.7 mile, ~14 minutes"]
      },
      {
        id: "t14",
        time: "20:00",
        title: "Bulldog Haunted Jail Tour",
        description: "Step inside Charleston's 1802 jail for a 45-minute flashlight tour of cells, gallows, and ghostly tales. EMF meters welcome! Lady Jae, this is your moment!",
        type: "activity",
        photos: ["charleston25/charleston-jail-1.webp", "charleston25/charleston-jail-2.webp", "charleston25/charleston-jail-3.webp"],
        mapUrl: "https://maps.app.goo.gl/SU5uwan4nUBqwJ86A",
        location: "21 Magazine St",
        highlights: ["1802 jail", "Ghost stories", "EMF meters allowed"],
        notes: [
          "Only clear water bottles allowed; no flavored drinks",
          "Waist pack size rule: ≤11\" x 6\"",
          "Guides let EMF gadgets run but no cell-phone flash video"
        ]
      },
      {
        id: "t15",
        time: "21:00",
        title: "Dessert at Carmella's",
        description: "Cap the night with coconut cake and affogato at this charming dessert bar. Open until 11pm!",
        type: "food",
        location: "198 East Bay St",
        photos: ["charleston25/carmellas-menu-1.webp", "charleston25/carmellas-menu-2.webp"],
        mapUrl: "https://maps.app.goo.gl/Spn6jyDwHJzUn5cSA",
        highlights: ["Coconut cake", "Affogato", "Late night treats"],
        notes: ["0.4 mile, 7-min walk from jail", "Cash discount available"]
      }
    ]
  },
  {
    id: "friday",
    date: "2025-06-06",
    title: "Fried-Chicken, Sandpipers & Sunset Scoops",
    attendees: ["Lady Jae", "Nikki", "Shawn"],
    hype: "🍗 Charleston's King Street calls with Leon's world-famous fried chicken—crispy, juicy, and worth the hype. Then we head north to unite with the cousins at Oak Island!",
    quickFacts: [
      "11am doors at Leon's Oyster Shop (fried chicken + oysters)",
      "Callie's biscuit box to-go",
      "Wildlife stroll on Sandpiper Pond Trail, Huntington Beach SP",
      "4pm check-in at 203 16th Pl E, Oak Island",
      "Marsh-walk photo op behind the house",
      "Kid-easy dinner at KoKo Cabana + ice-cream at Sweetreat"
    ],
    activities: [
      {
        id: "f1",
        time: "06:30",
        title: "Optional Sunrise at Waterfront Park",
        description: "Early birds can grab lobby coffee and catch the sunrise glow at the Pineapple Fountain on the waterfront pier.",
        type: "activity",
        photos: ["charleston25/charleston-waterfront-1.webp", "charleston25/charleston-waterfront-2.webp"],
        highlights: ["Pineapple Fountain", "Sunrise photos", "Harbor views"],
        notes: ["Optional activity", "Lobby coffee available from 6:30am"]
      },
      {
        id: "f2",
        time: "08:00",
        title: "Hotel Checkout Prep",
        description: "Call front desk for luggage pull, settle your bill, and grab lobby fruit for the road. FQI checkout is flexible until 11am.",
        type: "accommodation",
        notes: [
          "FQI's gourmet breakfast spread (6:30-10:30am) is free",
          "Grab fruit & yogurt if hungry before Leon's"
        ]
      },
      {
        id: "f3",
        time: "10:40",
        title: "Walk to Leon's Oyster Shop",
        description: "15-minute stroll from French Quarter Inn to Leon's (698 King St). Doors open at 11am sharp!",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/NRSJzrqrzDrzphNc6",
        notes: ["0.9 mile, ~15 minutes"]
      },
      {
        id: "f4",
        time: "11:00",
        title: "Lunch at Leon's Oyster Shop",
        description: "Charleston's cult fried chicken spot! Share a half-bird of their famous fried chicken, char-grilled oysters, and Brussels Caesar salad. No reservations—early arrival beats the crowd.",
        type: "food",
        location: "698 King St",
        photos: ["charleston25/leons-oyster-menu-1.webp", "charleston25/leons-oyster-menu-2.webp"],
        mapUrl: "https://maps.app.goo.gl/NRSJzrqrzDrzphNc6",
        highlights: ["World-famous fried chicken", "Char-grilled oysters", "Brussels Caesar"],
        notes: [
          "Opens 11am but fryer hits temp at 10:50—line up at 10:45 for first seat",
          "Order extra half-bird boxed for Kyle's road snack",
          "Zero-proof 'Ginger Fizz' available"
        ]
      },
      {
        id: "f5",
        time: "12:15",
        title: "Callie's Hot Little Biscuit",
        description: "Cross King Street to grab a box of 6 biscuits to-go. Get buttermilk and cinnamon for the road!",
        type: "food",
        location: "476½ King St",
        photos: ["charleston25/callies-biscuits-menu-1.webp", "charleston25/callies-biscuits-menu-2.webp"],
        mapUrl: "https://maps.app.goo.gl/wqc6hYThTSA53NL57",
        highlights: ["Buttermilk biscuits", "Cinnamon biscuits", "Travel snacks"],
        notes: [
          "Just 1 block from Leon's",
          "Pre-order via callielovescallie.com to save 20 min",
          "Biscuits travel well in cooler"
        ]
      },
      {
        id: "f6",
        time: "12:25",
        title: "Return to FQI & Load Car",
        description: "Walk back to French Quarter Inn, load the car with luggage, water bottles, and snacks. Wheels rolling by 12:45pm!",
        type: "travel",
        notes: ["0.9 mile walk back", "Aim to depart by 12:45pm"]
      },
      {
        id: "f7",
        time: "12:45",
        title: "Drive to Huntington Beach State Park",
        description: "Head north on US-17 to Murrells Inlet. About 1.5 hours with Friday beach traffic. $8/adult gate fee at the park.",
        type: "travel",
        mapUrl: "https://maps.app.goo.gl/XaZseTcBXJoBriz77",
        notes: [
          "78 miles, ~1h 30m",
          "Friday beach traffic can add 15 min",
          "$8 adult / $5 kids 6-15 park fee"
        ]
      },
      {
        id: "f8",
        time: "14:15",
        title: "Sandpiper Pond Trail",
        description: "Stretch your legs on this beautiful 2-mile boardwalk loop through salt marsh. Look for herons, sandpipers, and maybe even alligators! Flat and stroller-friendly.",
        type: "activity",
        photos: ["charleston25/sandpiper-pond-trail-1.webp", "charleston25/sandpiper-pond-trail-2.webp", "charleston25/sandpiper-pond-trail-3.webp"],
        mapUrl: "https://maps.app.goo.gl/XaZseTcBXJoBriz77",
        highlights: ["2-mile boardwalk", "Wildlife viewing", "Marsh ecosystem"],
        notes: [
          "Restrooms at park office",
          "Credit-card gate, but ranger often absent—use self kiosk",
          "Mosquito repellent in gift shop",
          "Bring quarters for kids to feed approved birds"
        ]
      },
      {
        id: "f9",
        time: "15:00",
        title: "Drive to Oak Island",
        description: "Final stretch! Take NC-179 → NC-211 for about 2 hours. Aim for 5pm arrival—Kyle and family may already be there!",
        type: "travel",
        mapUrl: "https://maps.google.com/?q=203+16th+Pl+E,+Oak+Island,+NC",
        notes: ["82 miles, ~2 hours", "Beach traffic possible"]
      },
      {
        id: "f10",
        time: "17:00",
        title: "Arrive at Oak Island Airbnb",
        description: "Welcome to 203 16th Pl E! Check-in is at 4pm, but we're aiming for 5pm arrival. Time for cousin hugs and bunk picks!",
        type: "accommodation",
        photos: ["charleston25/oak-island-house-1.webp", "charleston25/oak-island-house-2.webp"],
        mapUrl: "https://maps.google.com/?q=203+16th+Pl+E,+Oak+Island,+NC",
        location: "203 16th Pl E, Oak Island",
        highlights: ["Beach house", "Family reunion", "Ocean views"],
        notes: ["Kyle's family may arrive first", "Beach access at 16th Pl E"]
      },
      {
        id: "f11",
        time: "17:15",
        title: "Scenic Marsh Walkway",
        description: "Take a quick family stroll on the boardwalk behind the house (9th St). Perfect for a group photo with egrets in the background!",
        type: "activity",
        photos: ["charleston25/scenic-marsh-walkway-1.webp", "charleston25/scenic-marsh-walkway-2.webp"],
        mapUrl: "https://maps.app.goo.gl/StLcohZQ1FkJGZU8A",
        highlights: ["Boardwalk stroll", "Egret watching", "Sunset views"],
        notes: ["5-minute walk", "Great first group photo spot"]
      },
      {
        id: "f12",
        time: "18:00",
        title: "Dinner at KoKo Cabana",
        description: "Casual beach dinner with ocean views! Kids menu available with chicken tenders, plus grilled mahi tacos, coconut shrimp, and more for adults. Call ahead for party of 8!",
        type: "food",
        location: "705 Ocean Dr",
        photos: ["charleston25/koko-cabana-menu-1.webp", "charleston25/koko-cabana-menu-2.webp", "charleston25/koko-cabana-menu-3.webp"],
        mapUrl: "https://maps.app.goo.gl/QHgnfLGunjnHUcZJ7",
        highlights: ["Beach views", "Kids menu", "Outdoor seating"],
        notes: [
          "1.8 miles, 5-min drive or bikes",
          "They don't take call-ahead; best time 5:45pm before sunset crowd",
          "8 outdoor tables available",
          "Mocktail piña colada free refill for kids",
          "Closes at 8pm"
        ]
      },
      {
        id: "f13",
        time: "19:30",
        title: "Oak Island Lighthouse (Optional)",
        description: "Quick drive to the lighthouse for dusk photos. Grounds are open, but interior tours are Saturday 10am-12pm only.",
        type: "activity",
        photos: ["charleston25/lighthouse-1.webp", "charleston25/oak-island-lighthouse-1.webp", "charleston25/oak-island-lighthouse-2.webp"],
        mapUrl: "https://maps.app.goo.gl/rn7G7eSseQdPiarg6",
        highlights: ["Lighthouse photos", "Sunset views", "Quick stop"],
        notes: ["2.5 miles, 8-min drive", "Signboard history", "Interior tours Saturday AM only"]
      },
      {
        id: "f14",
        time: "20:30",
        title: "Ice Cream at Lil & John's Sweetreat",
        description: "End the night with homemade ice cream! Try the butter-pecan or birthday-cake swirl. Open until 10pm.",
        type: "food",
        location: "6324 E Oak Island Dr",
        photos: ["charleston25/sweet-treats-1.webp", "charleston25/sweet-treats-2.webp", "charleston25/sweet-treats-3.webp"],
        mapUrl: "https://maps.app.goo.gl/jM3R7dxUWGxEvvYs7",
        highlights: ["Homemade ice cream", "Butter pecan", "Birthday cake swirl"],
        notes: [
          "2 miles, 6-min drive",
          "Cash discount 5%",
          "Cotton-candy flavor is vegan"
        ]
      },
      {
        id: "f15",
        time: "21:30",
        title: "Evening Wind Down",
        description: "Kids wind down while adults prep cameras for tomorrow's sunrise at 6:01am. The path to beach is just a 5-minute walk from the house!",
        type: "activity",
        photos: ["charleston25/beach-sunset-1.webp", "charleston25/beach-sunset-2.webp", "charleston25/beach-1.webp"],
        highlights: ["Beach sunset", "Family time", "Rest up"],
        notes: ["Set alarms for 6:01am sunrise!", "Beach access right at 16th Pl E"]
      }
    ]
  }
];
