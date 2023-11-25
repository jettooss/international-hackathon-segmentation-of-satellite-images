import React from 'react';
import styles from './processedimageheader.module.css';
import {ProcessedImageArrow} from "./ProcessedImageArrow";
import {ProcessedImageDownload} from "./ProcessedImageDownload";

export function ProcessedImageHeader() {
  return (
    <div className={styles.container}>
      <ProcessedImageArrow />
      <ProcessedImageDownload />
    </div>
  );
}
