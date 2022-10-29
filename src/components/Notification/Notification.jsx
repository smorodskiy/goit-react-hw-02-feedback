import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <span>{message}</span>;
  }
}

export { Notification };

// Types
Notification.propTypes = {
  message: PropTypes.string,
};
