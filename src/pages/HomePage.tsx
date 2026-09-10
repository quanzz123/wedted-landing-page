import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VerifiedSuppliersSection from '../components/VerifiedSuppliersSection';
import EventAgenciesSection from '../components/EventAgenciesSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import CategoryGridSection from '../components/CategoryGridSection';
import CtaBanner from '../components/CtaBanner';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <VerifiedSuppliersSection />
        <EventAgenciesSection />
        <FeaturedProjectsSection />
        <FeaturedProductsSection />
        <CategoryGridSection />
        <CtaBanner />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
