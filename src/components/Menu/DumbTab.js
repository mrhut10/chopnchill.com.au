import propTypes from 'prop-types';
import DumbTabLabel from './DumbTabLabel';

const DumbTab = ({ label, path, active, Content }) => {
  const generatedLabel = DumbTabLabel({ active, label, path });

  return {
    active,
    Content,
    label: generatedLabel,
  };
};

DumbTab.propTypes = {
  label: propTypes.string,
  path: propTypes.string,
  activeTab: propTypes.bool,
  Content: propTypes.element,
};

export default DumbTab;
