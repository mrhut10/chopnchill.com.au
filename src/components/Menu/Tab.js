import React, { Component } from 'react';
import propTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={`${className} border-brand-blue border-b border-l-2 border-t flex font-display items-center leading-none px-2 py-4 text-base uppercase`}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;
