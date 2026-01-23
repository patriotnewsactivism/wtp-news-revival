import { useFeaturedArticles } from '@/hooks/useArticles';
import { ArticleCard } from './ArticleCard';
import { Skeleton } from '@/components/ui/skeleton';

export function FeaturedArticles() {
  const { data: articles, isLoading } = useFeaturedArticles(4);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="aspect-[16/9] rounded-lg" />
          <div className="grid gap-6">
            <Skeleton className="h-32 rounded-lg" />
            <Skeleton className="h-32 rounded-lg" />
            <Skeleton className="h-32 rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (!articles?.length) {
    return null;
  }

  const [mainArticle, ...sideArticles] = articles;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mainArticle && (
          <ArticleCard article={mainArticle} variant="featured" />
        )}
        <div className="flex flex-col">
          {sideArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
