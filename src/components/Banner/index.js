import React from 'react';
import propTypes from 'prop-types';

const Banner = ({ children }) => (
  <div className="bg-brand-blue font-display px-6 py-4 text-sm sm:text-xl text-center text-white uppercase">
    {children}
  </div>
);

Banner.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
};

export default Banner;
