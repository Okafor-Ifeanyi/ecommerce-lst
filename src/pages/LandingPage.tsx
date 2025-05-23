import { BestService } from "../components/BestService/BestService";
import { FeeaturedPosts } from "../components/FeaturedPosts/FeaturesPosts";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ProductSection } from "../components/Product/Product";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <ProductSection />
      <BestService />
      <FeeaturedPosts />
    </div>
  );
};
