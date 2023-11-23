import React from 'react';
import styles from './intro.module.css';
import {IntroDescription} from "./IntroDescription";
import {useSelector} from "react-redux";
import {IInitialState} from "../../store/reducer";

export function Intro() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);

  return (
    <section
      className={styles.intro}
      style={{
        backgroundSize: startButtonClicked ? "30%, cover" : "70%, cover",
      }}
    >
      <div
        className={styles.container}
        style={{
          opacity: startButtonClicked ? "0" : "1",
          visibility: startButtonClicked ? "hidden" : "visible"
        }}
      >
        <IntroDescription />
      </div>
    </section>
  );
}
