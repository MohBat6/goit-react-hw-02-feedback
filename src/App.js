import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './components/FeedbackWidget/Statistics';
import Section from './components/FeedbackWidget/Section';
import FeedbackOptions from './components/FeedbackWidget/FeedbackOption';
import Notification from './components/FeedbackWidget/Notification';
import Styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedbacks = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    const percent = (this.state.good * 100) / this.totalFeedbacks();
    return Math.round(percent);
  };

  onLeaveFeedback = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  render() {
    return (
      <div className={Styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={option => this.onLeaveFeedback(option)}
          />
          <h2>Statistics</h2>
          {this.totalFeedbacks() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedbacks()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;