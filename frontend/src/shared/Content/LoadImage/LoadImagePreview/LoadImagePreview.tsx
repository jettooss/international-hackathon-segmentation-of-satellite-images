import React from 'react';
import styles from './loadimagepreview.module.css';
import {useSelector} from "react-redux";
import {IInitialState} from "../../../../store/reducer";

interface ILoadImagePreview {
  previewImage: any;
}

export function LoadImagePreview({ previewImage }: ILoadImagePreview) {
  const imageLoaded = useSelector<IInitialState, boolean>(state => state.imageLoaded.imageLoaded);

  return (
    <div
      className={styles.container}
      style={{
        opacity: imageLoaded ? "0" : "1",
        visibility: imageLoaded ? "hidden" : "visible"
      }}
    >
      <img className={previewImage} src={previewImage} alt="Preview Image" />
    </div>
  );
}
