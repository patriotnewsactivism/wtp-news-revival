import { AlertCircle } from 'lucide-react';
import { useArticles } from '@/hooks/useArticles';
import { Link } from 'react-router-dom';

export function BreakingNewsBanner() {
  const { data: articles } = useArticles(undefined, 1);
  
  const latestArticle = articles?.[0];

  if (!latestArticle) return null;

  return (
    <div className="breaking-news">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Breaking</span>
        </div>
        <div className="h-4 w-px bg-accent-foreground/30 flex-shrink-0" />
        <Link
          to={`/article/${latestArticle.slug}`}
          className="text-sm font-medium truncate hover:underline"
        >
          {latestArticle.title}
        </Link>
      </div>
    </div>
  );
}
