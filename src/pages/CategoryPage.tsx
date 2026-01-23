import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArticleGrid } from '@/components/articles/ArticleGrid';

const categoryInfo: Record<string, { title: string; description: string }> = {
  politics: {
    title: 'Politics',
    description: 'Political news, analysis, and commentary from Washington and beyond.',
  },
  economy: {
    title: 'Economy',
    description: 'Economic news, market updates, and financial analysis.',
  },
  health: {
    title: 'Health',
    description: 'Health news, medical breakthroughs, and wellness insights.',
  },
  technology: {
    title: 'Technology',
    description: 'Technology news, innovation, and digital trends.',
  },
  opinion: {
    title: 'Opinion',
    description: 'Opinion pieces, editorials, and commentary from our contributors.',
  },
  news: {
    title: 'News',
    description: 'Latest news and breaking stories.',
  },
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const info = categoryInfo[category?.toLowerCase() || ''] || {
    title: category,
    description: '',
  };

  const categoryName = category?.charAt(0).toUpperCase() + (category?.slice(1) || '');

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
