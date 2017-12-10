import React from 'react';
import PropTypes from 'prop-types';

export const BUTTON = {
  TYPE: {
    PRIMARY: 'button-primary',
    SECONDARY: 'button-secondary',
  },
};

const Button = ({ type, children }) => (
  <button className={type}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  type: BUTTON.TYPE.PRIMARY,
  children: false,
};

export default Button;
