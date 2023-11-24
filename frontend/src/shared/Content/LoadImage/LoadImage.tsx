import React from 'react';
import styles from './loadimage.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../store/reducer";
import {LoadImageButton} from "./LoadImageButton";

export function LoadImage() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);
  const imageLoaded = useSelector<IInitialState, boolean>(state => state.imageLoaded.imageLoaded);

  return (
    <div
      className={styles.container}
      style={{
        opacity: !startButtonClicked || imageLoaded ? "0" : "1",
        visibility: !startButtonClicked || imageLoaded ? "hidden" : "visible"
      }}
    >
      <LoadImageButton />
    </div>
  );
}
