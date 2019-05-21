import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Banner from '../components/Banner';

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Chop 'n Chill`,
          `Chop and Chill`,
          `Asian food`,
          `Burgers`,
          `Bar`,
          `Grill`,
          `restaurant,`,
        ]}
      />
      <MenuSection />
      <AboutSection />
      <Banner>If you can't stay — take it away!</Banner>
      <EventsSection />
      <ContactSection />
      <MapSection />
    </Layout>
  </>
);

export default IndexPage;
