import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNewsBanner } from '@/components/home/BreakingNewsBanner';
import { FeaturedArticles } from '@/components/articles/FeaturedArticles';
import { ArticleGrid } from '@/components/articles/ArticleGrid';
import { EditorialFocus } from '@/components/home/EditorialFocus';

const Index = () => {
  return (
    <Layout>
      <BreakingNewsBanner />
      <HeroSection />
      <EditorialFocus />
      <FeaturedArticles />
      <div className="editorial-divider container mx-auto px-4" />
      <ArticleGrid title="Latest Dispatches" limit={9} />
    </Layout>
  );
};

export default Index;
