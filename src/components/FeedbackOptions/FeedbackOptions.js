import React from 'react';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.Feedback}>
    <h2 className={styles.Feedback__title}>Please leave feedback</h2>
    <div className={styles.BtnsList}>
      {options.map(item => (
        <button
          onClick={() => onLeaveFeedback(item)}
          type={item}
          key={item}
          className={styles.BtnItem}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

export default Feedback;
