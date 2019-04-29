import React from 'react';
// import Footer from '../components/Footer';

import '../css/fonts.css';
import '../css/tailwind.css';
import '../css/typography.css';
import '../css/global.css';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';

const IndexPage = () => (
  <div className="body antialiased flex flex-col font-sans leading-relaxed min-h-screen overflow-hidden relative text-brand-blue w-full">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Header />
    <main className="bg-white flex-1 mx-auto w-full">
      <MenuSection />
      <AboutSection />
    </main>
    {/* <Footer /> */}
  </div>
);

export default IndexPage;
