import React from 'react';
import Footer from '../components/Footer';

import '../css/fonts.css';
import '../css/tailwind.css';
import '../css/typography.css';
import '../css/global.css';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Banner from '../components/Banner';

const IndexPage = () => (
  <div className="antialiased flex flex-col font-sans leading-relaxed text-brand-blue w-full">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Header />
    <main className="bg-white flex-1 mx-auto w-full">
      <MenuSection />
      <AboutSection />
      <Banner>Indoors. Outdoors. Doggo Friendly. Call to Book a Table.</Banner>
      <EventsSection />
      <ContactSection />
      <MapSection />
    </main>
    <Footer />
  </div>
);

export default IndexPage;
