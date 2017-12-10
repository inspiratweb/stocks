import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlankSlate extends Component {
  renderEmoji() {
    return (
      <div className="blankSlate-emoji">
        <div className="blankSlate-emoji-head">
          <div className="blankSlate-emoji-face">
            <div className="blankSlate-emoji-eyes" />
            <div className="blankSlate-emoji-mouth" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="blankSlate">
        {this.renderEmoji()}
        <p>{this.props.copy}</p>
      </div>
    );
  }
}

BlankSlate.propTypes = {
  copy: PropTypes.string,
};

BlankSlate.defaultProps = {
  copy: '',
};

export default BlankSlate;
