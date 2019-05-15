import React from 'react';
import propTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/fonts.css';
import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col font-sans leading-relaxed min-h-screen text-brand-blue w-full">
    <Header />
    <main className="bg-white flex flex-1 flex-col mx-auto overflow-hidden w-full">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

export default Layout;
