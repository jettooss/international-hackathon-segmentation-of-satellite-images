import React from 'react';
import styles from './content.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../store/reducer";
import {Preview} from "./Preview";
import {LoadImage} from "./LoadImage";
import {ProcessedImage} from "./ProcessedImage";

export function Content() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);

  return (
    <section
      className={styles.intro}
      style={{
        backgroundSize: startButtonClicked ? "30%, cover" : "70%, cover"
      }}
    >
      <Preview />
      <LoadImage />
      <ProcessedImage />
    </section>
  );
}
