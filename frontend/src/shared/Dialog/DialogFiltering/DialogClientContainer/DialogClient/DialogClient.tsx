import React from "react";
import styles from './dialogclient.module.css';
import {CloseIcon} from "../../../../Icons/CloseIcon";

interface IDialogClient {
  handleClickClose: () => void;
}

export function DialogClient({ handleClickClose }: IDialogClient) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Фильтры отделений</h3>
        <span className={styles.icon} onClick={handleClickClose}><CloseIcon /></span>
      </div>
      <div className={styles.descWrapper}>
        <span className={styles.desc}>Физические лица</span>
        <span className={styles.circle}>
          <span className={`firstInnerCircle ${styles.innerCircle} active`}></span>
        </span>
      </div>
      <div className={styles.descWrapper}>
        <span className={styles.desc}>Юридические лица</span>
        <span className={styles.circle}>
          <span className={`secondInnerCircle ${styles.innerCircle}`}></span>
        </span>
      </div>
    </div>
  );
}
