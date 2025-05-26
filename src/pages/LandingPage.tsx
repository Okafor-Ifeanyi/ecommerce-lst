import { AboutUs } from "../components/AboutUs/AboutUs";
import { BestService } from "../components/BestService/BestServices";
import { Contact } from "../components/Contact/Contact";
import { FeeaturedPosts } from "../components/FeaturedPosts/FeaturesPosts";
import { Footer } from "../components/Footer/Footer";
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
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};
