import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.Statistics}>
    <h2>Statistics</h2>
    <ul className={styles.Stat__List}>
      <li className={styles.Stat__Item}>
        Good:
        <span> {good}</span>
      </li>
      <li className={styles.Stat__Item}>
        Neutral:
        <span> {neutral}</span>
      </li>
      <li className={styles.Stat__Item}>
        Bad:
        <span> {bad}</span>
      </li>
      <li className={styles.Stat__Item}>
        Total:
        <span> {total}</span>
      </li>
      <li className={styles.Stat__Item}>
        Positive feedback:
        <span> {positivePercentage} %</span>
      </li>
    </ul>
  </div>
);

export default Statistics;
