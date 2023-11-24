import React from 'react';
import styles from './previewtext.module.css'

export function PreviewText() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Space satellite AI</h1>
      <p className={styles.desc}>
        Update cadastral maps using satellite Ai.
        It addresses the semantic segmentation of roads and
        buildings using high spatial resolution satellite imagery.
      </p>
    </div>
  );
}
