export const BUSINESS = {
  name: "Plumbing & Beyond",
  phone: "650-588-0414",
  phoneHref: "tel:+16505880414",
  address: {
    street: "309 San Bruno Ave E",
    city: "San Bruno",
    region: "CA",
    postal: "94066",
    country: "US",
  },
  // TODO: confirm hours with owner
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
  emergency: "24/7 Emergency Service Available",
  areaServed: [
    "San Bruno",
    "Daly City",
    "South San Francisco",
    "Millbrae",
    "Burlingame",
    "San Mateo",
    "Pacifica",
    "Brisbane",
    "Colma",
  ],
  geo: { lat: 37.6305, lng: -122.4111 },
  // TODO: replace with real CA contractor license number
  license: "CA Lic. # TODO",
};

export const SERVICES = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    short: "Fast, thorough drain clearing for kitchens, bathrooms, and main lines.",
  },
  {
    slug: "water-heater-repair",
    title: "Water Heater Repair & Installation",
    short: "Tank and tankless water heater repair, replacement, and installation.",
  },
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair",
    short: "Pinpoint hidden leaks before they cause costly damage.",
  },
  {
    slug: "emergency-plumbing",
    title: "24/7 Emergency Plumbing",
    short: "Burst pipes, overflowing toilets, no hot water — we answer day or night.",
  },
  {
    slug: "fixture-installation",
    title: "Fixture Installation",
    short: "Faucets, toilets, sinks, and showers installed cleanly the first time.",
  },
  {
    slug: "sewer-line-repair",
    title: "Sewer Line Repair",
    short: "Camera inspection, trenchless options, and full sewer line replacement.",
  },
  {
    slug: "repiping",
    title: "Whole-Home Repiping",
    short: "Replace old galvanized or failing pipes with modern copper or PEX.",
  },
  {
    slug: "garbage-disposal",
    title: "Garbage Disposal Service",
    short: "Disposal repair and installation for every major brand.",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];