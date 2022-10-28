import React from 'react';
import { Component } from 'react';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>        
        <button onClick={1}>Good</button>
        <button onClick={1}>Neutral</button>
        <button onClick={1}>Bad</button>
      </div>
    );
  }
}

export { FeedbackOptions };
