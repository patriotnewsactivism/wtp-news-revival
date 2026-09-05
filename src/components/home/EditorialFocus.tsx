import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpenCheck, MapPin, Scale, Sprout } from 'lucide-react';

const focusAreas = [
  {
    title: 'Rights & Power',
    description: 'Follow the policies, court decisions, and institutions that determine whose rights are recognized in practice.',
    ideas: 'Records requests, court watches, and accountability reporting.',
    href: '/category/rights-power',
    icon: Scale,
  },
  {
    title: 'Off Grid',
    description: 'Practical reporting from people building resilient lives around land, water, power, food, and community.',
    ideas: 'Solar, water catchment, rural zoning, and repair skills.',
    href: '/category/off-grid',
    icon: Sprout,
  },
  {
    title: 'Legal Exile',
    description: 'Examine what happens when an ordinary person is excluded, mislabeled, or pushed to the margins of public life.',
    ideas: 'Due process, reentry, asset seizure, and bureaucratic harm.',
    href: '/category/legal-exile',
    icon: MapPin,
  },
];

export function EditorialFocus() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent mb-3">The field guide</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
            Stories from outside the approved script.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Outlaw.News covers the choices people make when institutions fail them—without romanticizing harm or treating claims as facts.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map(({ title, description, ideas, href, icon: Icon }) => (
            <Link key={title} to={href} className="group rounded-lg border border-border bg-card p-5 article-card">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">{ideas}</p>
              <ArrowUpRight className="mt-4 h-4 w-4 text-accent" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 rounded-lg border border-primary/15 bg-primary px-6 py-5 text-primary-foreground md:grid-cols-[auto_1fr] md:items-center">
        <BookOpenCheck className="h-6 w-6 text-accent" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-primary-foreground/85">
          <span className="font-semibold text-primary-foreground">Reporting standard: </span>
          separate evidence from allegation, link to primary records where possible, and make room for the human impact a system can leave behind.
        </p>
      </div>
    </section>
  );
}
