import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <h2 className={styles.Notification__title}>{message}</h2>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
