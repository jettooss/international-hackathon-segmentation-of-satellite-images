import React from 'react';
import styles from './dialogfiltering.module.css';
import {DialogClientContainer} from "./DialogClientContainer";
import {DialogRouteContainer} from "./DialogRouteContainer";

export function DialogFiltering() {
  return (
    <div className={styles.container}>
      <DialogClientContainer />
      <DialogRouteContainer />
      <button className={styles.button}>
        <span className={styles.desc}>Применить</span>
      </button>
    </div>
  );
}
