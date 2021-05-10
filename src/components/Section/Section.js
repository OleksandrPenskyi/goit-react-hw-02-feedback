import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h2 className={styles.Section__title}>{title}</h2>
    {children}
  </section>
);

export default Section;

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
