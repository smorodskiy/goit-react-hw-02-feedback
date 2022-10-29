import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Button, ButtonsGroup } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonsGroup>
        {options.map(btn => {
          return <Button id={btn} key={btn} onClick={onLeaveFeedback}>{btn}</Button>;
        })}
      </ButtonsGroup>
    );
  }
}

export { FeedbackOptions };

// Types
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
