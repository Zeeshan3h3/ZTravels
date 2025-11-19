const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Enjoy the tranquility of the countryside in this charming farmhouse surrounded by lush greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1528353518107-4b3b1b3f49b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1100,
    location: "Normandy",
    country: "France",
  },
  {
    title: "Tropical Bungalow",
    description:
      "Relax in a private tropical bungalow with a pool and garden view. Perfect for honeymooners.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Desert Glamping Tent",
    description:
      "Experience the desert like never before in a luxurious glamping tent under the stars.",
    image: {
      url: "https://images.unsplash.com/photo-1558981033-8dbdc79c1727?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1300,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Cozy Scandinavian Cabin",
    description:
      "Snuggle up by the fireplace in this cozy Scandinavian-style cabin surrounded by snow.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Modern Lake House",
    description:
      "A sleek, modern lake house with large windows offering stunning water views.",
    image: {
      url: "https://images.unsplash.com/photo-1560184897-9f3e3e48e0f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2400,
    location: "Ontario",
    country: "Canada",
  },
  {
    title: "Jungle Eco Lodge",
    description:
      "Stay in an eco-friendly jungle lodge surrounded by wildlife and lush rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1501769214405-5e86a12d27b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1900,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Cliffside Villa",
    description:
      "Marvel at breathtaking views from this luxurious cliffside villa overlooking the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Snowy Alpine Lodge",
    description:
      "Cozy up in an alpine lodge after a day of skiing and enjoy the snowy mountain scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Vintage Countryside Cottage",
    description:
      "A beautifully restored vintage cottage surrounded by flower gardens and meadows.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 950,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Luxury Desert Villa",
    description:
      "Enjoy the tranquility of the desert in this luxurious villa with private pool and panoramic dunes view.",
    image: {
      url: "https://images.unsplash.com/photo-1618221469555-88a9a76f6d7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3100,
    location: "Doha",
    country: "Qatar",
  }
];

module.exports = { data: sampleListings };
