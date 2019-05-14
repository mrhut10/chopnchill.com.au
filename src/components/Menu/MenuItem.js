import React from 'react';
import propTypes from 'prop-types';

const MenuItem = ({ title, children, price }) => (
  <div className="sm:flex justify-between mb-4">
    <div className="leading-tight max-w-lg sm:pr-12">
      <h2 className="font-display sm:text-2xl uppercase">{title}</h2>
      {children}
    </div>
    <div className="font-display sm:text-right sm:text-xl whitespace-no-wrap">
      {price}
    </div>
  </div>
);

MenuItem.propTypes = {
  title: propTypes.string,
  children: propTypes.object,
  price: propTypes.string,
};

export default MenuItem;
