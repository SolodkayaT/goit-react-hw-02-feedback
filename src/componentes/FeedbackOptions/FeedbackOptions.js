import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
import uuid from "react-uuid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={styles.feedbackBtn}
      key={uuid()}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.defaultProps = {
  options: [],
  onLeaveFeedback: () => {}
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;
