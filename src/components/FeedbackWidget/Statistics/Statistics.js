import React from 'react';
import Styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={Styles.list}>
      <li>
        <span>Good: {good} </span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive feedback: {`${positivePercentage} %`}</span>
      </li>
    </ul>
  );
};

export default Statistics;