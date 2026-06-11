import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Plumbing & Beyond | San Bruno, CA | 650-588-0414" },
      { name: "description", content: "Contact Plumbing & Beyond at 650-588-0414 or visit 309 San Bruno Ave E, San Bruno, CA 94066. Serving the San Francisco Peninsula with 24/7 emergency plumbing." },
      { property: "og:title", content: "Contact Plumbing & Beyond" },
      { property: "og:description", content: "Call 650-588-0414. Serving San Bruno, Daly City and the SF Peninsula with 24/7 emergency plumbing." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapsAddress = encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}`);
  return (
    <>
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Contact Plumbing &amp; Beyond</h1>
          <p className="mt-3 max-w-prose text-lg text-muted-foreground">
            Need a plumber in San Bruno, Daly City or anywhere on the Peninsula? Call us — we answer the phone and we get to work fast.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Phone</p>
                  <a href={BUSINESS.phoneHref} className="text-xl font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                    {BUSINESS.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">{BUSINESS.emergency}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                  <a href={BUSINESS.emailHref} className="text-lg text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                    {BUSINESS.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin aria-hidden className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Address</p>
                  <address className="not-italic text-lg text-foreground">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock aria-hidden className="mt-0.5 size-6 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Hours</p>
                  <ul className="mt-1 text-foreground">
                    {BUSINESS.hours.map((h) => (
                      <li key={h.day}><span className="font-medium">{h.day}:</span> {h.time}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Find us</h2>
            <p className="mt-2 text-muted-foreground">{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <iframe
                title={`Map of ${BUSINESS.name} at ${BUSINESS.address.street}, ${BUSINESS.address.city}`}
                src={`https://www.google.com/maps?q=${mapsAddress}&output=embed`}
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}