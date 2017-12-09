import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const BUTTON = {
  TYPE: {
    PRIMARY: 'button-primary',
    SECONDARY: 'button-secondary'
  }
};

class Button extends Component {
  render() {
    return (
      <button className={this.props.type}>{this.props.children}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: BUTTON.TYPE.PRIMARY,
};

export default Button;
