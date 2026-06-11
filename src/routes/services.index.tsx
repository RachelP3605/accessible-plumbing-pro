import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in San Bruno & Daly City | Plumbing & Beyond" },
      { name: "description", content: "Drain cleaning, water heater repair, leak detection, sewer line repair, repiping and 24/7 emergency plumbing across the San Francisco Peninsula." },
      { property: "og:title", content: "Plumbing Services | Plumbing & Beyond" },
      { property: "og:description", content: "Full-service residential plumbing for San Bruno, Daly City and the SF Peninsula." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Our plumbing services</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Residential plumbing repair, installation and emergency response across San Bruno, Daly City and the Peninsula. If it's plumbing, we probably do it.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight aria-hidden className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold">Don't see what you need? Just ask.</h2>
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