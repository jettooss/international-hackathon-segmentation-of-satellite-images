import React from 'react';
import styles from './preview.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../store/reducer";
import {PreviewText} from "./PreviewText";

export function Preview() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);

  return (
    <div
      className={styles.container}
      style={{
        opacity: !startButtonClicked ? "1" : "0",
        visibility: !startButtonClicked ? "visible" : "hidden"
      }}
    >
      <PreviewText />
    </div>
  );
}
