import React from 'react';
import styles from './processedimagearrow.module.css';
import {ArrowIcon} from "../../../../Icons/ArrowIcon";

export function ProcessedImageArrow() {
  return (
    <div className={styles.container}>
      <ArrowIcon />
      <span className={styles.desc}>Load another image</span>
    </div>
  );
}
