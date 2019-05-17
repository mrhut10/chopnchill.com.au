import React from 'react';
import propTypes from 'prop-types';

const DumbA = ({ href, children }) => <a href={href}>{children}</a>;

DumbA.propTypes = {
  href: propTypes.string,
  children: propTypes.any,
};

export default DumbA;
