import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, Phone, ArrowLeft } from "lucide-react";
import { BUSINESS, SERVICES, type ServiceSlug } from "@/lib/business";

type Detail = {
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

const DETAILS: Record<ServiceSlug, Detail> = {
  "drain-cleaning": {
    title: "Drain Cleaning in San Bruno & Daly City",
    description: "Fast, thorough drain cleaning for clogged kitchens, bathrooms, and main lines across the SF Peninsula. Same-day service available.",
    intro: "Slow drains and stubborn clogs almost always get worse. Our drain cleaning service clears the line and gets your home back to normal — without damaging your pipes.",
    bullets: [
      "Kitchen, bath, laundry, and floor drains",
      "Hydro jetting for heavy grease and roots",
      "Camera inspection on stubborn lines",
      "Up-front pricing before we start",
    ],
    faqs: [
      { q: "Why do my drains keep clogging?", a: "Repeat clogs usually mean grease, hair, scale, or root intrusion in the line itself — not just at the fixture. A camera inspection finds the real cause." },
      { q: "Do you offer same-day drain cleaning?", a: "Yes, we offer same-day drain cleaning in San Bruno and surrounding Peninsula cities whenever our schedule allows." },
    ],
  },
  "water-heater-repair": {
    title: "Water Heater Repair & Installation",
    description: "Tank and tankless water heater repair, replacement and installation in San Bruno, Daly City and the SF Peninsula.",
    intro: "No hot water — or not enough? We repair every major water heater brand and install new tank and tankless units sized correctly for your home.",
    bullets: [
      "Gas and electric tank water heaters",
      "Tankless water heater installation",
      "Thermostat, element, and anode replacement",
      "Code-compliant venting and seismic strapping",
    ],
    faqs: [
      { q: "How long does a water heater last?", a: "Tank water heaters typically last 8–12 years. Tankless units commonly last 15–20 years with annual flushing." },
      { q: "Should I switch to tankless?", a: "Tankless is great for endless hot water and lower energy bills, but it isn't right for every home. We'll give you an honest recommendation." },
    ],
  },
  "leak-detection-repair": {
    title: "Leak Detection & Repair",
    description: "Pinpoint hidden water leaks before they cause damage. Non-invasive leak detection and repair in San Bruno and the SF Peninsula.",
    intro: "A high water bill, damp drywall, or a mystery puddle can all point to a hidden leak. We locate leaks accurately and repair them with as little disruption to your home as possible.",
    bullets: [
      "Slab leak and pinhole leak detection",
      "Pressure testing and acoustic detection",
      "Pipe repair and section replacement",
      "Insurance-ready documentation",
    ],
    faqs: [
      { q: "How do I know if I have a hidden leak?", a: "Common signs are unexplained jumps in your water bill, warm spots on the floor, running water sounds with everything off, or musty smells." },
      { q: "Do you cut walls to find leaks?", a: "We use non-invasive detection first and only open walls when we've pinpointed the location." },
    ],
  },
  "emergency-plumbing": {
    title: "24/7 Emergency Plumber",
    description: "Burst pipes, flooding, sewage backup or no hot water? Plumbing & Beyond responds to plumbing emergencies day or night across San Bruno and the SF Peninsula.",
    intro: "Plumbing emergencies don't wait for business hours. Call 650-588-0414 anytime — a real plumber will answer and we'll dispatch as quickly as possible.",
    bullets: [
      "Burst and frozen pipes",
      "Overflowing toilets and sewage backup",
      "Sudden leaks and flooding",
      "No hot water emergencies",
    ],
    faqs: [
      { q: "What should I do first in a plumbing emergency?", a: "Shut off the main water valve to your home, then call us. If it's a gas water heater leak, also shut off the gas." },
      { q: "Do you charge more after hours?", a: "Emergency calls outside normal hours have a higher rate. We'll always quote you up front before any work begins." },
    ],
  },
  "fixture-installation": {
    title: "Plumbing Fixture Installation",
    description: "Faucets, toilets, sinks, tubs and shower valves installed cleanly in San Bruno and surrounding Peninsula cities.",
    intro: "Whether you bought the fixture or need help picking one, we install it right — leak-free, level, and to code.",
    bullets: [
      "Kitchen and bathroom faucets",
      "Toilets and bidets",
      "Sinks, tubs, and shower valves",
      "Dishwashers, ice makers, and pot fillers",
    ],
    faqs: [
      { q: "Can I supply my own fixture?", a: "Yes. We're happy to install fixtures you've purchased — just make sure they're new and complete with all parts." },
      { q: "How long does a faucet install take?", a: "A standard faucet swap usually takes about an hour, assuming the existing shutoffs are in good shape." },
    ],
  },
  "sewer-line-repair": {
    title: "Sewer Line Repair & Replacement",
    description: "Camera inspection, spot repair, trenchless lining and full sewer line replacement in San Bruno, Daly City and across the Peninsula.",
    intro: "Older homes on the Peninsula often have clay or cast iron sewer lines that crack, sag, or get invaded by tree roots. We diagnose the real problem with a camera and recommend the least disruptive fix.",
    bullets: [
      "Sewer camera inspection and locating",
      "Hydro jetting and root removal",
      "Trenchless pipe lining where suitable",
      "Full sewer line replacement",
    ],
    faqs: [
      { q: "How do I know if my sewer line is the problem?", a: "Multiple drains backing up at once, gurgling toilets, or sewage smells in the yard are common signs of a sewer line issue." },
      { q: "Do I have to dig up my yard?", a: "Not always. Trenchless lining can repair many sewer lines through small access points without tearing up your landscaping." },
    ],
  },
  "repiping": {
    title: "Whole-Home Repiping",
    description: "Replace failing galvanized or polybutylene pipes with modern copper or PEX. Whole-home repiping in San Bruno and the SF Peninsula.",
    intro: "If your water pressure is weak, your hot water runs rusty, or you've had repeat pinhole leaks, your home may need a repipe. We replace old plumbing with copper or PEX, restore your walls, and bring everything up to code.",
    bullets: [
      "Copper and PEX repipe options",
      "Minimal drywall opening and clean patching",
      "Permit pulling and inspection coordination",
      "Workmanship guarantee",
    ],
    faqs: [
      { q: "How long does a repipe take?", a: "Most single-family repipes take 2–5 days. We work to keep your water back on each night whenever possible." },
      { q: "Copper or PEX — which is better?", a: "Both are excellent. PEX is faster to install and more freeze-tolerant; copper has a longer track record. We'll help you decide." },
    ],
  },
  "garbage-disposal": {
    title: "Garbage Disposal Repair & Installation",
    description: "Garbage disposal repair, replacement and installation for every major brand. Serving San Bruno, Daly City and the SF Peninsula.",
    intro: "If your disposal hums, leaks, or won't turn on, we can usually repair or replace it the same day.",
    bullets: [
      "Disposal repair and unjamming",
      "Replacement and upgrade installation",
      "Leak repair on disposal connections",
      "Dishwasher drain hookup",
    ],
    faqs: [
      { q: "Is it worth repairing my disposal?", a: "If the motor is good and the issue is a jam, switch, or leaking gasket, repair is usually cheaper than replacement." },
      { q: "What brand do you recommend?", a: "We install most major brands. We'll recommend a model sized for your household and budget." },
    ],
  },
};

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in DETAILS)) throw notFound();
  },
  loader: ({ params }) => {
    const slug = params.slug as ServiceSlug;
    return { slug, detail: DETAILS[slug] };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { detail } = loaderData;
    return {
      meta: [
        { title: `${detail.title} | Plumbing & Beyond` },
        { name: "description", content: detail.description },
        { property: "og:title", content: `${detail.title} | Plumbing & Beyond` },
        { property: "og:description", content: detail.description },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: detail.title,
            description: detail.description,
            provider: {
              "@type": "Plumber",
              name: BUSINESS.name,
              telephone: BUSINESS.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.region,
                postalCode: BUSINESS.address.postal,
              },
            },
            areaServed: BUSINESS.areaServed.map((n) => ({ "@type": "City", name: n })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: detail.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
      <p className="mt-2 text-muted-foreground">That service page doesn't exist.</p>
      <Link to="/services" className="mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-primary-foreground">
        See all services
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
      <button onClick={() => reset()} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-primary-foreground">
        Try again
      </button>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { detail } = Route.useLoaderData();
  const related = SERVICES.filter((s) => s.title !== detail.title).slice(0, 3);

  return (
    <>
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
            <ArrowLeft aria-hidden className="size-4" /> All services
          </Link>
          <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">{detail.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{detail.intro}</p>
          <div className="mt-6">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-5 text-base font-semibold text-accent-foreground hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone aria-hidden className="size-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold text-foreground">What's included</h2>
          <ul className="mt-6 space-y-3">
            {detail.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-foreground">Frequently asked questions</h2>
          <dl className="mt-6 space-y-5">
            {detail.faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-base font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-foreground">Related services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block h-full rounded-xl border border-border bg-card p-5 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}