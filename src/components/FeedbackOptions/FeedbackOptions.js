import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.Feedback__list}>
    {options.map(item => (
      <button
        onClick={onLeaveFeedback}
        type="button"
        key={item}
        className={styles.BtnItem}
        name={item}
      >
        {item}
      </button>
    ))}
  </div>
);

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
