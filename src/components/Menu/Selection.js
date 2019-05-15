import React, { Component } from 'react';
import propTypes from 'prop-types';

class Selection extends Component {
  static propTypes = {
    activeTab: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
  };

  onChange = () => {
    const { label, onChange } = this.props;
    onChange(label);
  };

  render() {
    const {
      onChange,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <option
        className={`${className} border-brand-blue border-b border-l-2 border-t cursor-pointer flex items-center leading-none px-2 py-4 text-center text-base uppercase w-full`}
        onChange={onChange}
      >
        {label}
      </option>
    );
  }
}

export default Selection;
