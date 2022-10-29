import { Component } from 'react';

// Check types of props
import PropTypes from 'prop-types';
import { Badge, StatItem, StatList } from './Statistics.styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatList>
        <StatItem>
          Good: <Badge>{good}</Badge>
        </StatItem>
        <StatItem>
          Neutral: <Badge>{neutral}</Badge>
        </StatItem>
        <StatItem>
          Bad: <Badge>{bad}</Badge>
        </StatItem>
        <StatItem>
          Total: <Badge>{total}</Badge>
        </StatItem>
        <StatItem>
          Positive feedback: <Badge>{positivePercentage}%</Badge>
        </StatItem>
      </StatList>
    );
  }
}

export { Statistics };

// Types
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
