import React from 'react';
import styles from './processedimagecontent.module.css';
import {ProcessedImageSidebar} from "./ProcessedImageSidebar";
import {ProcessedImageView} from "./ProcessedImageView";

export function ProcessedImageContent() {
  return (
    <div className={styles.container}>
      <ProcessedImageSidebar />
      <ProcessedImageView />
    </div>
  );
}
