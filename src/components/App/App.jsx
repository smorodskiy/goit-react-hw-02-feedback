import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, cur) => (total += cur));
  };

  countPositiveFeedbackPercentage = total => {
    if (total > 0 && this.state.good > 0)
      return Math.round((this.state.good / total) * 100);
    return 0;
  };

  onLeaveFeedbackHandle = e => {
    switch (e.target.id) {
      case 'Good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        break;
      case 'Bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        break;
      default:
        break;
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedbackHandle}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export { App };
