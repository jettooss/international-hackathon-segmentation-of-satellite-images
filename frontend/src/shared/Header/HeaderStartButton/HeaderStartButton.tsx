import React from 'react';
import styles from './headerstartbutton.module.css';

export function HeaderStartButton() {
  return (
    <button className={styles.button}>
      <span className={styles.desc}>Get Started</span>
    </button>
  );
}
