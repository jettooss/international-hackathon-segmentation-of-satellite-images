import React from 'react';
import styles from './loadimagebutton.module.css';

export function LoadImageButton() {
  return (
    <button className={styles.button}>
      <span className={styles.desc}>Load Image</span>
    </button>
  );
}
