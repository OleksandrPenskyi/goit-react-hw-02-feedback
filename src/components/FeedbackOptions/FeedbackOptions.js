import React from 'react';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.Feedback__list}>
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
);

export default Feedback;
