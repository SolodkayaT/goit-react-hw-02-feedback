import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li className={styles.statisticsItem}>
          Good: <span>{good}</span>
        </li>
        <li className={styles.statisticsItem}>
          Neutral: <span>{neutral}</span>
        </li>
        <li className={styles.statisticsItem}>
          Bad: <span>{bad}</span>
        </li>
      </ul>
      {total > 0 ? (
        <ul>
          <li className={styles.totalStatisticsItem}>
            Total: <span>{total}</span>
          </li>
          <li className={styles.totalStatisticsItem}>
            Positive Feedback:
            <span>{positivePercentage}%</span>
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number
};

export default Statistics;
