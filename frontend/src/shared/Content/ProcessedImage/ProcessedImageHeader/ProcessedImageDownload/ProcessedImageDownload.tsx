import React from 'react';
import styles from './processedimagedownload.module.css';

export function ProcessedImageDownload() {
  return (
    <button className={styles.button}>
      <span className={styles.desc}>Download</span>
    </button>
  );
}
