import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Wrench, Droplets, Flame, ShieldCheck, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";
import { BUSINESS, SERVICES } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plumber in San Bruno, CA | Plumbing & Beyond | 650-588-0414" },
      { name: "description", content: "Licensed plumber in San Bruno serving Daly City, South SF, Millbrae & the Peninsula. Drain cleaning, water heaters, leak repair, 24/7 emergencies. Call 650-588-0414." },
      { property: "og:title", content: "Plumber in San Bruno, CA | Plumbing & Beyond" },
      { property: "og:description", content: "Trusted local plumbing for San Bruno, Daly City & the SF Peninsula. 24/7 emergency service available." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const faqs = [
  { q: "Do you offer 24/7 emergency plumbing in San Bruno?", a: "Yes. Plumbing & Beyond responds to plumbing emergencies day or night across San Bruno, Daly City and the surrounding Peninsula. Call 650-588-0414 anytime." },
  { q: "What areas do you serve?", a: "We serve San Bruno, Daly City, South San Francisco, Millbrae, Burlingame, San Mateo, Pacifica, Brisbane and Colma." },
  { q: "Are you licensed and insured?", a: "Yes. We are a licensed and insured California plumbing contractor. License details are available on request." },
  { q: "Do you give free estimates?", a: "We provide upfront pricing before any work begins so there are no surprises on your invoice." },
];

const highlights = [
  { icon: ShieldCheck, title: "Licensed & insured", body: "Local California plumbing contractor you can trust." },
  { icon: Clock, title: "24/7 emergency response", body: "Burst pipes don't wait. Neither do we." },
  { icon: MapPin, title: "Bay Area Peninsula", body: "Proudly serving San Bruno, Daly City & nearby cities." },
];

const iconFor: Record<string, typeof Wrench> = {
  "drain-cleaning": Droplets,
  "water-heater-repair": Flame,
  "leak-detection-repair": Droplets,
  "emergency-plumbing": Clock,
  "fixture-installation": Wrench,
  "sewer-line-repair": Wrench,
  "repiping": Wrench,
  "garbage-disposal": Wrench,
};

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/85 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              <Clock aria-hidden className="size-3.5" />
              24/7 Emergency Service
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Trusted Plumber in San Bruno &amp; Daly City
            </h1>
            <p className="mt-4 max-w-prose text-base opacity-95 md:text-lg">
              Plumbing &amp; Beyond is your licensed local plumber for fast, honest service across the San Francisco Peninsula. From dripping faucets to full repipes, we get it done right the first time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-5 text-base font-semibold text-accent-foreground hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
              >
                <Phone aria-hidden className="size-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center rounded-md border border-primary-foreground/40 bg-transparent px-5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
              >
                See our services
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Plumbing & Beyond plumber repairing a kitchen sink in a San Bruno home"
              width={1600}
              height={1024}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section aria-labelledby="why-us" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="why-us" className="sr-only">Why choose Plumbing &amp; Beyond</h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon aria-hidden className="size-7 text-accent" />
                <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-heading" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 id="services-heading" className="text-3xl font-bold text-foreground md:text-4xl">Full-service plumbing for Peninsula homes</h2>
            <p className="mt-3 text-muted-foreground">
              Residential plumbing repair, installation and emergency response across San Mateo County.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => {
              const Icon = iconFor[s.slug] ?? Wrench;
              return (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group block h-full rounded-xl border border-border bg-card p-5 transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon aria-hidden className="size-6 text-primary" />
                    <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Service area */}
      <section aria-labelledby="area-heading" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 id="area-heading" className="text-3xl font-bold text-foreground">Serving the San Francisco Peninsula</h2>
          <p className="mt-3 max-w-prose text-muted-foreground">
            Based in San Bruno, we serve homeowners and small businesses across these communities:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {BUSINESS.areaServed.map((c) => (
              <li key={c} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 id="faq-heading" className="text-3xl font-bold text-foreground">Frequently asked questions</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-base font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Need a plumber today?</h2>
            <p className="mt-1 opacity-90">Call now and talk to a real plumber.</p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-accent-foreground hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          >
            <Phone aria-hidden className="size-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
