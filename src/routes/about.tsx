import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";
import aboutImg from "@/assets/about-plumbing.jpg";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Plumbing & Beyond | San Bruno Plumbers" },
      { name: "description", content: "Plumbing & Beyond is a locally owned, licensed plumbing company in San Bruno, CA serving the SF Peninsula with honest pricing and quality workmanship." },
      { property: "og:title", content: "About Plumbing & Beyond | San Bruno Plumbers" },
      { property: "og:description", content: "Locally owned licensed plumbers serving San Bruno, Daly City and the SF Peninsula." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const promises = [
  "Upfront, honest pricing before work begins",
  "Licensed, insured California plumbing contractor",
  "Clean workmanship and tidy job sites",
  "Workmanship guarantee on every job",
  "Real local plumbers — not a national call center",
];

function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground/80">About us</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">Your trusted local plumber on the Peninsula</h1>
          <p className="mt-4 max-w-prose text-lg text-muted-foreground">
            Plumbing &amp; Beyond is a locally owned plumbing company based at {BUSINESS.address.street} in {BUSINESS.address.city}. We've built our reputation on doing the job right, treating homes with respect, and being straight with our neighbors.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <img
            src={aboutImg}
            alt="Close-up of copper plumbing pipes being installed by a Plumbing & Beyond technician"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Quality plumbing, the way it should be done</h2>
            <p className="mt-3 text-muted-foreground">
              From quick faucet swaps to full repipes and sewer line replacement, we handle residential plumbing across San Mateo County. Every job — large or small — gets the same careful diagnosis and clean workmanship.
            </p>
            <ul className="mt-6 space-y-3">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-5 text-base font-semibold text-primary-foreground hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Phone aria-hidden className="size-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center rounded-md border border-border bg-card px-5 text-base font-semibold text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}