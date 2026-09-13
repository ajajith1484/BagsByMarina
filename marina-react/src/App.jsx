import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import PromoBanner from './components/PromoBanner';
import TrustBadges from './components/TrustBadges';
import BestsellersAndGuide from './components/BestsellersAndGuide';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [cartCount] = useState(0);

  return (
    <div className="min-h-screen bg-marina-bg">
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <NewArrivals />
        <PromoBanner />
        <TrustBadges />
        <BestsellersAndGuide />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
