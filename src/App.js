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
    neutral: 0,
    bad: 0
  };

  handleGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step
    }));
  };

  handleNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step
    }));
  };

  handleBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step
    }));
  };

  countTotalFeedback = state => {
    return state.good + state.neutral + state.bad;
  };

  countPositiveFeedbackPercentage = state => {
    return Math.round(
      (state.good / (state.good + state.neutral + state.bad)) * 100
    );
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedbacck">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={[
              this.handleGood,
              this.handleNeutral,
              this.handleBad
            ]}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
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
