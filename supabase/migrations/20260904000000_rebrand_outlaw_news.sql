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

-- Evergreen launch pieces: original editorial material, not reports of current events.
INSERT INTO public.articles (
  title, slug, excerpt, content, category, author, is_featured, is_published,
  meta_title, meta_description, tags
) VALUES
  (
    'The Outlaw.News Field Guide',
    'the-outlaw-news-field-guide',
    'What this publication covers, how it approaches sources, and what "outlaw" means here.',
    $$Outlaw.News is for people examining what happens when public systems stop protecting the people they claim to serve.

Here, outlaw is not a synonym for harm. It is a lens for understanding self-reliance, civil liberties, and the choices people make when official narratives leave no room for their experience.

We will distinguish allegation from evidence, identify what we know and what we do not, and link to primary records whenever they are available. We will make space for the human cost behind a statute, policy, or enforcement action.

When freedom is outlawed, the outlaws will be free—but that freedom is strongest when it is informed, responsible, and rooted in truth.$$,
    'Dispatches', 'Outlaw.News Desk', true, true,
    'The Outlaw.News Field Guide',
    'Outlaw.News: independent reporting on self-reliance, civil liberties, and life beyond broken systems.',
    ARRAY['editorial', 'civil-liberties', 'self-reliance']
  ),
  (
    'Before You Build: A Grounded Starting Point for Off-Grid Planning',
    'before-you-build-off-grid-planning',
    'A first checklist for turning the off-grid dream into a lawful, resilient, and workable plan.',
    $$Off-grid living begins with constraints, not a shopping list. Before buying equipment, understand the land, water access, local building requirements, climate, and the daily work a low-dependency life requires.

Start with a site notebook. Track seasonal sun, prevailing wind, drainage, access roads, water sources, and the distance to basic services. Then read county and state rules directly, ask precise questions, and keep written records of every answer.

Resilience comes from redundancy: more than one way to heat, store water, preserve food, communicate, and solve a small problem before it becomes a crisis. Build skills and relationships alongside infrastructure.$$,
    'Off Grid', 'Outlaw.News Desk', false, true,
    'A Grounded Starting Point for Off-Grid Planning',
    'A practical first checklist for planning resilient, low-dependency living.',
    ARRAY['off-grid', 'land', 'water', 'resilience']
  ),
  (
    'How to Read a Public Record Without Letting the Narrative Read You',
    'how-to-read-a-public-record',
    'A practical framework for separating official language, evidence, and unanswered questions.',
    $$An official document can be useful without being the whole story. A report records what an institution chose to write down; it may not include the perspective of the person affected, the context of the decision, or material that was never collected.

Read every record twice. First, identify the basic facts: who created it, when, under what authority, and what evidence it cites. Second, mark every conclusion, omission, and label. Ask what would confirm or challenge each claim.

Compare records across sources, preserve the original files and dates, and describe uncertainty plainly. Critical reading is not cynicism. It is the discipline of leaving room for the truth to be more complicated than a single account.$$,
    'Rights & Power', 'Outlaw.News Desk', false, true,
    'How to Read a Public Record Critically',
    'A framework for distinguishing official language, evidence, and unanswered questions.',
    ARRAY['public-records', 'accountability', 'due-process']
  )
ON CONFLICT (slug) DO NOTHING;
