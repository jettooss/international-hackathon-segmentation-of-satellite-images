import React from 'react';
import styles from './processedimageview.module.css';
import {IInitialState} from "../../../../../store/reducer";
import {useSelector} from "react-redux";

export function ProcessedImageView() {
  const uploadedImage = useSelector<IInitialState, string>(state => state.uploadedImage.uploadedImage);
  const processedImage = useSelector<IInitialState, string>(state => state.processedImage.processedImage);
  const switchOnOff = useSelector<IInitialState, boolean>(state => state.switcher.switcher);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={switchOnOff ? processedImage : uploadedImage} alt="Processed image" />
    </div>
  );
}
