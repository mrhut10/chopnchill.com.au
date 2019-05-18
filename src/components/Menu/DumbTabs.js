import React, { Component } from 'react';
import propTypes from 'prop-types';
import DumbLabel from './DumbTabLabel';

const DumbTabs = ({ TabArray }) => (
  <div>
    <div className="menuLabels">
      {/* Dump of Labels */}
      {TabArray.map(child => (
        <p>{child.label}</p>
      ))}
    </div>
    {/* Display visible content */}
    <div className="menuContent">
      {TabArray.find(child => child.active).Content}
    </div>
  </div>
);

DumbTabs.propTypes = {
  TabArray: propTypes.arrayOf(propTypes.any),
};

export default DumbTabs;
