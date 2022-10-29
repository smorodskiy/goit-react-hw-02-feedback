import React from 'react';
import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
// import { List, Image, Item, Status, Name } from './FriendList.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(btn => {
          return <button id={btn} key={btn} onClick={onLeaveFeedback}>{btn}</button>;
        })}
      </>
    );
  }
}

export { FeedbackOptions };

// Types
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
