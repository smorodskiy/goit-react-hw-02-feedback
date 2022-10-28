import React from 'react';
import { Component } from 'react';
import { Container } from './App.styled';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={1} onLeaveFeedback={1} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={1}
            neutral={1}
            bad={1}
            total={1}
            positivePercentage={1}
          />
          <Notification message="There is no feedback" />
        </Section>
      </Container>
    );
  }
}
