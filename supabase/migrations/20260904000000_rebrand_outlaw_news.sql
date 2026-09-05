-- Align future article defaults and available categories with Outlaw.News.
ALTER TABLE public.articles
  ALTER COLUMN category SET DEFAULT 'Dispatches',
  ALTER COLUMN author SET DEFAULT 'Outlaw.News Desk';

INSERT INTO public.categories (name, slug, description) VALUES
  ('Dispatches', 'dispatches', 'Latest independent field reporting'),
  ('Rights & Power', 'rights-power', 'Civil liberties, institutional power, and accountability'),
  ('Off Grid', 'off-grid', 'Resilient living, land, energy, food, and low-dependency life'),
  ('Self-Reliance', 'self-reliance', 'Skills, tools, and stories for living on your own terms'),
  ('Legal Exile', 'legal-exile', 'Reporting on displacement, marginalization, and systems of law'),
  ('Surveillance', 'surveillance', 'Privacy, technology, and personal autonomy')
ON CONFLICT (name) DO UPDATE
SET slug = EXCLUDED.slug,
    description = EXCLUDED.description;
