import { useParams, Link } from 'react-router-dom';
import { useArticle, useArticles } from '@/hooks/useArticles';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { format } from 'date-fns';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug || '');
  const { data: relatedArticles } = useArticles(article?.category || undefined, 3);

  if (isLoading) {
    return (
      <Layout>
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Skeleton className="h-8 w-24 mb-4" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-64 mb-8" />
          <Skeleton className="aspect-video w-full mb-8 rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </article>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const publishedDate = article.published_at
    ? format(new Date(article.published_at), 'MMMM d, yyyy')
    : '';

  const readingTime = Math.ceil(article.content.split(/\s+/).length / 200);

  const filteredRelated = relatedArticles?.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <Layout>
      {/* SEO Meta tags would be added here in a real app using react-helmet */}
      <article>
        {/* Header */}
        <header className="bg-secondary py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dispatches
            </Link>

            {article.category && (
              <Badge className="category-badge mb-4">{article.category}</Badge>
            )}

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {article.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
              )}
              {publishedDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {publishedDate}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTime} min read
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.featured_image && (
          <div className="container mx-auto px-4 max-w-5xl -mt-4 mb-8 md:mb-12">
            <img
              src={article.featured_image}
              alt={article.title}
              className="w-full aspect-video object-cover rounded-lg shadow-elevated"
            />
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl py-8">
          <div className="article-prose prose prose-lg dark:prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, index) =>
              paragraph.trim() ? <p key={index}>{paragraph}</p> : null
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {filteredRelated && filteredRelated.length > 0 && (
          <section className="bg-secondary py-12 mt-12">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredRelated.map((related) => (
                  <ArticleCard key={related.id} article={related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
