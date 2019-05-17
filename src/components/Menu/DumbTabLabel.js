import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import DumbA from './DumbA';

const DumbTabLabel = ({ active, label, path }) => {
  // if local path use Gatsby Link else use DumbA
  const localLink = path && path[0] === '/';
  const CompToUse = localLink ? Link : DumbA;
  const className = ''; /*`tab-list-item ${
    active ? 'tab-list-active ' : ''
  }border-brand-blue border-b border-l-2 border-t cursor-pointer flex font-display items-center leading-none px-2 py-4 text-base uppercase`;
  */
  return (
    <CompToUse to={path} href={path} className={className} key={label}>
      {label}
    </CompToUse>
  );
};

DumbTabLabel.propTypes = {
  active: propTypes.bool,
  label: propTypes.string,
  path: propTypes.string,
};

export default DumbTabLabel;
