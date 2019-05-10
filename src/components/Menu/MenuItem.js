import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ title, children, price }) => (
  <div className="flex justify-between mb-4">
    <div className="leading-tight max-w-lg sm:pr-12">
      <h2 className="font-display uppercase">{title}</h2>
      {children}
    </div>
    <div className="font-display">${price}</div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  price: PropTypes.string,
};

export default MenuItem;
