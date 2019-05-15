import React, { Component } from 'react';
import propTypes from 'prop-types';

import Tab from './Tab';
import Selection from './Selection';

class Tabs extends Component {
  static propTypes = {
    children: propTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs sm:flex max-w-3xl mx-auto sm:p-4 text-xl w-full">
        {/* Mobile View */}
        <div className="sm:hidden inline-block relative w-full">
          <select className="appearance-none bg-brand-blue block border-2 border-brand-blue font-display leading-tight focus:outline-none pr-8 px-4 py-2 rounded-none focus:shadow-outline text-white w-full">
            {children.map(child => {
              const { label } = child.props;

              return (
                <Selection
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onChange={onClickTabItem}
                />
              );
            })}
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
        <ol className="tab-list border-t sm:flex sm:flex-wrap hidden sm:vertical">
      <div className="tabs flex max-w-3xl mx-auto p-4 text-xl w-full">
        <ol className="tab-list border-t flex vertical">
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content border-brand-blue border-2 border-t-0 sm:border-l-0 sm:border-t-2 flex flex-1 px-6 py-8 w-full">
          <div className="sm:squiggle sm:pl-6 w-full">
            {children.map(child => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
