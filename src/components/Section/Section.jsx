import React from 'react';
import { Component } from 'react';

import { SectionStyled } from './Section.styled';

// Check types of props
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionStyled>
        <h2>{title}</h2>
        {children}
      </SectionStyled>
    );
  }
}

export { Section };

// Types
Section.propTypes = {
  title: PropTypes.string.isRequired,  
};
