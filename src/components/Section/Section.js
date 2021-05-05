import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h2 className={styles.Section__title}>{title}</h2>
    {children}
  </section>
);

export default Section;
