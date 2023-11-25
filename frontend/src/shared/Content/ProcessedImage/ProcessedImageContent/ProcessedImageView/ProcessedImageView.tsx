import React from 'react';
import styles from './processedimageview.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../../store/reducer";

export function ProcessedImageView() {
  const processedImage = useSelector<IInitialState, string>(state => state.processedImage.processedImage);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={processedImage} alt="Processed image" />
    </div>
  );
}
