import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export { Section };

// Types
Section.propTypes = {
  title: PropTypes.string.isRequired,  
};
