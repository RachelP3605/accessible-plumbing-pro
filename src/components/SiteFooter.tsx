import { Link } from "@tanstack/react-router";
import { BUSINESS, SERVICES } from "@/lib/business";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{BUSINESS.name}</p>
          <p className="mt-2 text-sm opacity-90">
            Licensed local plumbers serving San Bruno, Daly City and the San Francisco Peninsula.
          </p>
          <p className="mt-3 text-xs opacity-80">{BUSINESS.license}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Contact</h2>
          <address className="not-italic mt-3 text-sm leading-relaxed opacity-95">
            {BUSINESS.address.street}<br />
            {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
          </address>
          <p className="mt-3 text-sm">
            <a className="underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href={BUSINESS.phoneHref}>
              {BUSINESS.phone}
            </a>
          </p>
          <p className="text-sm">
            <a className="underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href={BUSINESS.emailHref}>
              {BUSINESS.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="opacity-95 hover:opacity-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Service Area</h2>
          <p className="mt-3 text-sm opacity-95">
            {BUSINESS.areaServed.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs opacity-80">
          &copy; {year} {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}