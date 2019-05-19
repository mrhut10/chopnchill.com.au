import React from 'react';
import propTypes from 'prop-types';

const DumbTabs = ({ TabArray }) => (
  <div className="menu sm:flex max-w-3xl mx-auto sm:p-4 text-base w-full">
    <span id="menu" />
    {/* Mobile view */}
    <div className="sm:hidden inline-block relative w-full">
      <select className="appearance-none bg-brand-blue block border-2 border-brand-blue font-display leading-tight focus:outline-none pr-8 px-4 py-2 rounded-none focus:shadow-outline text-white w-full">
        {/* {TabArray.map(tab => (
          <option
            key={tab.key}
            className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full"
          >
            {<tab.label />}
          </option>
        ))} */}
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          To Share?
        </option>
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          Or Not To Share?
        </option>
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          Breakfast
        </option>
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          Vegan / Vegatarian
        </option>
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          Gluten Free
        </option>
        <option className="tab-list-active cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full">
          Drinks
        </option>
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

DumbTabs.propTypes = {
  TabArray: propTypes.arrayOf(propTypes.any),
};

export default DumbTabs;
