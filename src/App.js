import React, { Component } from "react";
import PropTypes from "prop-types";
import Statistics from "./componentes/Statistics/Statistics";
import FeedbackOptions from "./componentes/FeedbackOptions/FeedbackOptions";
import Section from "./componentes/Section/Section";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
    step: 1
  };

  static propTypes = {
    initialValue: PropTypes.number,
    step: PropTypes.number
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  };

  handleFeedback = type => {
    this.setState((state, props) => {
      const key = type.toLowerCase();
      return { [key]: state[key] + props.step };
    });
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedbacck">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </div>
    );
  }
}
export default App;
