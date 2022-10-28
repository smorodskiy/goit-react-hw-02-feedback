import { Component } from 'react';

class Statistics extends Component {
  constructor(props) {
    super(props)
    this.title = props.title
  }
  render() {
    const {good, neutral, bad, total, positivePercentage} = this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    );
  }
}

export { Statistics };
