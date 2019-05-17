import React, { Component } from 'react';
import propTypes from 'prop-types';
import DumbTab from './DumbTab';

const DumbTabs = ({ TabArray }) => (
  <div>
    <div>
      {/* Dump of Labels */}
      {TabArray.map(child => (
        <p>{child.label}</p>
      ))}
    </div>
    <div>
      {/* Display visible content */}
      {TabArray.map(child => child.Content)}
    </div>
  </div>
);

DumbTabs.propTypes = {
  TabArray: propTypes.arrayOf(DumbTabs),
};

export default DumbTabs;
