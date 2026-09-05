import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArticleGrid } from '@/components/articles/ArticleGrid';

const categoryInfo: Record<string, { title: string; description: string }> = {
  'rights-power': {
    title: 'Rights & Power',
    description: 'Reporting on civil liberties, institutional power, and the consequences when rights are treated as conditional.',
  },
  'off-grid': {
    title: 'Off Grid',
    description: 'Practical coverage of resilient living, land, energy, food, and building a life with fewer dependencies.',
  },
  'self-reliance': {
    title: 'Self-Reliance',
    description: 'Skills, tools, and stories for people making room to live on their own terms.',
  },
  'legal-exile': {
    title: 'Legal Exile',
    description: 'Careful reporting on people displaced, marginalized, or recast by systems of law and enforcement.',
  },
  surveillance: {
    title: 'Surveillance',
    description: 'Tracking the technologies, policies, and institutions that shape privacy and personal autonomy.',
  },
  dispatches: {
    title: 'Dispatches',
    description: 'Latest reporting from the edge of accepted narratives.',
  },
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const info = categoryInfo[category?.toLowerCase() || ''] || {
    title: category,
    description: '',
  };

  const categoryName = info.title || category?.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

  return (
    <Layout>
      {/* Category Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {info.title || categoryName}
          </h1>
          {info.description && (
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {info.description}
            </p>
          )}
        </div>
      </section>

      {/* Articles */}
      <ArticleGrid category={categoryName} />
    </Layout>
  );
}
