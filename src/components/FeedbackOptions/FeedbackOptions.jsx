import React from 'react';
import { Component } from 'react';

class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }

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
