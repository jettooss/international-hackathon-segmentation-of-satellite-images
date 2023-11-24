import React from 'react';
import styles from './loadimage.module.css';
import {LoadImageButton} from "./LoadImageButton";
import {useSelector} from "react-redux";
import {IInitialState} from "../../../store/reducer";

export function LoadImage() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);

  return (
    <div
      className={styles.container}
      style={{
        opacity: !startButtonClicked ? "0" : "1",
        visibility: !startButtonClicked ? "hidden" : "visible"
      }}
    >
      <LoadImageButton />
    </div>
  );
}
