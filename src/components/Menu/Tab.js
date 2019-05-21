import propTypes from 'prop-types';
import TabLabel from './TabLabel';

const Tab = ({ label, path, active, Content }) => {
  const generatedLabel = TabLabel({ active, label, path });

  return {
    active,
    Content,
    path,
    labelText: label,
    label: generatedLabel,
  };
};

Tab.propTypes = {
  label: propTypes.string,
  path: propTypes.string,
  activeTab: propTypes.bool,
  Content: propTypes.element,
};

export default Tab;
