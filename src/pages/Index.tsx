import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNewsBanner } from '@/components/home/BreakingNewsBanner';
import { FeaturedArticles } from '@/components/articles/FeaturedArticles';
import { ArticleGrid } from '@/components/articles/ArticleGrid';

const Index = () => {
  return (
    <Layout>
      <BreakingNewsBanner />
      <HeroSection />
      <FeaturedArticles />
      <div className="editorial-divider container mx-auto px-4" />
      <ArticleGrid title="Latest News" limit={9} />
    </Layout>
  );
};

export default Index;
