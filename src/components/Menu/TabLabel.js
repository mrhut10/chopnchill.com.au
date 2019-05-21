import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

const TabLabel = ({ active, label, path }) => {
  const className = `${active ? 'tab-list-active ' : ''} px-2 py-4`;

  return (
    <Link className={className} to={path} key={label}>
      {label}
    </Link>
  );
};

TabLabel.propTypes = {
  active: propTypes.bool,
  label: propTypes.string,
  path: propTypes.string,
};

export default TabLabel;
