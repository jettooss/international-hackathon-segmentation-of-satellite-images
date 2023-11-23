import React from "react";
import styles from "./dialogroute.module.css";

export function DialogRoute() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Фильтры маршрутов</h3>
      <div className={styles.wrapper}>
        <span className={styles.desc}>Пешеходный</span>
        <span className={styles.circle}>
          <span className={`thirdInnerCircle ${styles.innerCircle} active`}></span>
        </span>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.desc}>Автомобильный</span>
        <span className={styles.circle}>
          <span className={`fourthInnerCircle ${styles.innerCircle}`}></span>
        </span>
      </div>
    </div>
  );
}
