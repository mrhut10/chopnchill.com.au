import propTypes from 'prop-types';

const Tab = ({ label, path, Content }) => {
  return { Content, path, labelText: label };
};

Tab.propTypes = {
  labelText: propTypes.string,
  path: propTypes.string,
  Content: propTypes.element,
};

export default Tab;
