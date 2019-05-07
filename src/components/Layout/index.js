import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/fonts.css';
import '../../css/tailwind.css';
import '../../css/typography.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col font-sans leading-relaxed min-h-screen text-brand-blue w-full">
    <Header />
    <main className="bg-white flex-1 mx-auto w-full">{children}</main>
    <Footer />
  </div>
);

export default Layout;
