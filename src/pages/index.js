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
      <main className="bg-white flex-1 mx-auto w-full">
        <MenuSection />
        <AboutSection />
        <Banner>
          Indoors. Outdoors. Doggo Friendly. Call to Book a Table.
        </Banner>
        <EventsSection />
        <ContactSection />
        <MapSection />
      </main>
    </Layout>
  </>
);

export default IndexPage;
