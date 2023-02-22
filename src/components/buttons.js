import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Btn = ({ className = 'Btn', click, text }) => (
  <button type="button" className={className} onClick={click}>
    {text}
  </button>
);

Btn.propTypes = {
  className: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Btn;
