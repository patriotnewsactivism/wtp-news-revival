import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import type { Article } from '@/hooks/useArticles';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const formattedDate = article.published_at
    ? format(new Date(article.published_at), 'MMMM d, yyyy')
    : '';

  if (variant === 'featured') {
    return (
      <Link
        to={`/article/${article.slug}`}
        className="group relative block overflow-hidden rounded-lg article-card"
      >
        <div className="aspect-[16/9] bg-muted">
          {article.featured_image ? (
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
        </div>
        <div className="absolute inset-0 featured-gradient" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {article.category && (
            <span className="category-badge-accent mb-3 inline-block">
              {article.category}
            </span>
          )}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {article.title}
          </h2>
          {article.excerpt && (
            <p className="text-white/80 text-base md:text-lg line-clamp-2 mb-3 hidden md:block">
              {article.excerpt}
            </p>
          )}
          <div className="flex items-center gap-4 text-white/70 text-sm">
            {article.author && <span>{article.author}</span>}
            {formattedDate && <span>{formattedDate}</span>}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link
        to={`/article/${article.slug}`}
        className="group flex gap-4 py-4 border-b border-border last:border-0"
      >
        {article.featured_image && (
          <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden bg-muted">
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          {article.category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {article.category}
            </span>
          )}
          <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mt-1">
            {article.title}
          </h3>
          <span className="text-xs text-muted-foreground mt-2 block">
            {formattedDate}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/article/${article.slug}`}
      className="group block article-card bg-card rounded-lg overflow-hidden"
    >
      <div className="aspect-[16/10] bg-muted overflow-hidden">
        {article.featured_image ? (
          <img
            src={article.featured_image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10" />
        )}
      </div>
      <div className="p-5">
        {article.category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {article.category}
          </span>
        )}
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors mt-2 line-clamp-2">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
          {article.author && <span>{article.author}</span>}
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>
    </Link>
  );
}
