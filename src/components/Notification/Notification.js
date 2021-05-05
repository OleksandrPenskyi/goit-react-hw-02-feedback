import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <h2 className={styles.Notification__title}>{message}</h2>
);

export default Notification;
