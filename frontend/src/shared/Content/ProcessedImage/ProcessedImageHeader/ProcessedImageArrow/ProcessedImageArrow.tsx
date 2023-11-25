import React from 'react';
import styles from './processedimagearrow.module.css';
import {ArrowIcon} from "../../../../Icons/ArrowIcon";
import {useDispatch} from "react-redux";
import {setUploadedImage} from "../../../../../store/uploadedImage/uploadedImageActions";
import {setImageLoaded} from "../../../../../store/imageLoaded/imageLoadedActions";

export function ProcessedImageArrow() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setUploadedImage(""));
    dispatch(setImageLoaded(false));
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <ArrowIcon />
      <span className={styles.desc}>Load another image</span>
    </div>
  );
}
