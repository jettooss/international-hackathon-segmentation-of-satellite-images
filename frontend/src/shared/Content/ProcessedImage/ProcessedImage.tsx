import React from 'react';
import styles from './processedimage.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../store/reducer";
import {ProcessedImageHeader} from "./ProcessedImageHeader";
import {ProcessedImageContent} from "./ProcessedImageContent";

export function ProcessedImage() {
  const imageLoaded = useSelector<IInitialState, boolean>(state => state.imageLoaded.imageLoaded);

  return (
    <div
      className={styles.container}
      style={{
        opacity: imageLoaded ? "1" : "0",
        visibility: imageLoaded ? "visible" : "hidden"
      }}
    >
      <ProcessedImageHeader />
      <ProcessedImageContent />
    </div>
  );
}
