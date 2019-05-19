import React from 'react';
import propTypes from 'prop-types';

const DumbTabs = ({ TabArray }) => (
  <div className="menu flex max-w-3xl mx-auto sm:p-4 text-base w-full">
    <span id="menu" />
    <ul className="border-brand-blue border-t-2 flex flex-wrap font-display items-center leading-none vertical w-8">
      {TabArray.map(tab => (
        <li
          key={tab.key}
          className="border-brand-blue border-b-2 border-l-2 flex items-center justify-center w-8"
        >
          {tab.label}
        </li>
      ))}
    </ul>
    <div className="border-2 border-brand-blue px-6 py-8 w-full">
      <div className="sm:squiggle sm:pl-6 text-xl w-full">
        {TabArray.find(tab => tab.active).Content}
      </div>
    </div>
  </div>
);

DumbTabs.propTypes = {
  TabArray: propTypes.arrayOf(propTypes.any),
};

export default DumbTabs;
