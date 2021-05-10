import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statList = [
    { itemName: 'Good', itemValue: good },
    { itemName: 'Neutral', itemValue: neutral },
    { itemName: 'Bad', itemValue: bad },
    { itemName: 'Total', itemValue: total },
    { itemName: 'Positive feedback', itemValue: positivePercentage },
  ];

  return (
    <div className={styles.Statistics}>
      <ul className={styles.Stat__List}>
        {statList.map(({ itemName, itemValue }) => (
          <li className={styles.Stat__Item} key={itemName}>
            {itemName}:<span> {itemValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
