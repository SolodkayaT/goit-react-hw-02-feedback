import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((opt, i) => (
    <button
      className={styles.feedbackBtn}
      key={opt}
      type="button"
      onClick={onLeaveFeedback[i]}
    >
      {opt}
    </button>
  ));
};

FeedbackOptions.defaultProps = {
  options: [],
  onLeaveFeedback: []
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.array
};

export default FeedbackOptions;
