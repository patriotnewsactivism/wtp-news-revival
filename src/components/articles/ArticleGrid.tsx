import { useArticles } from '@/hooks/useArticles';
import { ArticleCard } from './ArticleCard';
import { Skeleton } from '@/components/ui/skeleton';

interface ArticleGridProps {
  category?: string;
  limit?: number;
  title?: string;
}

export function ArticleGrid({ category, limit, title }: ArticleGridProps) {
  const { data: articles, isLoading } = useArticles(category, limit);

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-8">
        {title && (
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[16/10] rounded-lg" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!articles?.length) {
    return (
      <section className="container mx-auto px-4 py-8">
        {title && (
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            {title}
          </h2>
        )}
        <div className="text-center py-12 text-muted-foreground">
          <p>No articles found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <div className="h-px flex-1 bg-border ml-6" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
