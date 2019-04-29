import React from 'react';

const Banner = ({ children }) => (
  <div className="bg-brand-blue font-display px-6 py-4 text-sm sm:text-xl text-center text-white uppercase">
    {children}
  </div>
);

export default Banner;
