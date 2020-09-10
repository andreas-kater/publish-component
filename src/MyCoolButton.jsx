import React from 'react';

import PropTypes from 'prop-types';

const MyCoolButton = ({ type, title, onClick }) => (
  <button
    type={type}
    className="container"
    onClick={onClick}
  >
    {title}
  </button>
);

MyCoolButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

MyCoolButton.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default MyCoolButton;