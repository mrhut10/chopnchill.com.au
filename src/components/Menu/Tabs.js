import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
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
      <div className="tabs flex p-4 w-full">
        <ol className="tab-list border-t flex">
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
        <div className="tab-content border-brand-blue border-b-2 border-r-2 border-t-2 flex flex-1 px-6 py-8 w-full">
          <div className="sm:squiggle sm:pl-6">
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
