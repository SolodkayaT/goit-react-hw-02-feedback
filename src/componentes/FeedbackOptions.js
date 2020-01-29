import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((opt, i) => (
    <button key={opt} type="button" onClick={onLeaveFeedback[i]}>
      {opt}
    </button>
  ));
};
export default FeedbackOptions;
