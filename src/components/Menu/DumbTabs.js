import React from 'react';
import { navigate } from 'gatsby';
import propTypes from 'prop-types';

const DumbTabs = ({ TabArray }) => {
  /*
    e.target.value returns the value of the selected option
    navigate allows gatsby to handle the url change and prevents the whole app reloading
      = way faster plus your not overriding the global location varible from a component (risky)
  */
  const onChange = e => navigate(e.target.value);

  return (
    <div className="menu sm:flex max-w-3xl mx-auto sm:p-4 text-base w-full">
      <span id="menu" />
      {/* Mobile view */}
      <div className="sm:hidden inline-block relative w-full">
        <select
          onChange={onChange}
          className="appearance-none bg-brand-blue block border-2 border-brand-blue font-display leading-tight focus:outline-none pr-8 px-4 py-2 rounded-none focus:shadow-outline text-white w-full"
          value={TabArray.find(Tab => Tab.active).path}
        >
          {TabArray.map(Tab => (
            <option
              key={Tab.labelText}
              value={Tab.path}
              className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full"
            >
              {/* seems to only accept text content (no children) */}
              {Tab.labelText}
            </option>
          ))}
        </select>
        <div className="absolute flex inset-y-0 items-center pointer-events-none px-2 right-0 text-white">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {/* Desktop view */}
      <ul className="border-brand-blue border-t-2 sm:flex flex-wrap font-display hidden items-center leading-none vertical w-8">
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
};

DumbTabs.propTypes = {
  TabArray: propTypes.arrayOf(propTypes.any),
};

export default DumbTabs;
