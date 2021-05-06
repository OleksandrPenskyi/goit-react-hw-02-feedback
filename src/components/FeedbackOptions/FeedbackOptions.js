import React from 'react';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  const onHandleClick = event => {
    onLeaveFeedback(event);
  };

  return (
    <div className={styles.Feedback__list}>
      {options.map(item => (
        <button
          onClick={onHandleClick}
          type="button"
          key={item}
          className={styles.BtnItem}
          id={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Feedback;
