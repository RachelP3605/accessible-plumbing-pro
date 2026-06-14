export const BUSINESS = {
  name: "TJ Plumbing and Heating",
  phone: "(415) 480-7055",
  phoneHref: "tel:+14154807055",
  address: {
    street: "634 San Mateo Ave #4",
    city: "San Bruno",
    region: "CA",
    postal: "94066",
    country: "US",
  },
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
  emergency: "24/7 Emergency Service Available",
  areaServed: [
    "San Bruno",
    "South San Francisco",
    "Daly City",
    "Millbrae",
    "Burlingame",
    "San Mateo",
    "Pacifica",
    "Brisbane",
    "Colma",
  ],
  geo: { lat: 37.6305, lng: -122.4111 },
  license: "CA Licensed & Insured",
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
    short: "Tank and tankless water heater repair, replacement, and installation — backed by 40+ years experience and a 1-year parts & labor warranty.",
  },
  {
    slug: "heating-service",
    title: "Heating Service",
    short: "Same-day heating repairs and installations for residential and commercial customers.",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning Service",
    short: "AC repair and installation at affordable prices, no matter the job size.",
  },
  {
    slug: "gas-line-repair",
    title: "Gas Line Repair",
    short: "Fast, safe gas line assessment and repair with available financing options.",
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
    slug: "garbage-disposal",
    title: "Garbage Disposal Service",
    short: "Disposal repair and installation for every major brand.",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
