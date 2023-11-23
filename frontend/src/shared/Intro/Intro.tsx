import React from 'react';
import styles from './intro.module.css';
import {IntroDescription} from "./IntroDescription";
import {HeaderStartButton} from "../Header/HeaderStartButton";

export function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <IntroDescription />
      </div>
    </section>
  );
}
