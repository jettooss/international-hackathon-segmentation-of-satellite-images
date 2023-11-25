import React from 'react';
import styles from './processedimagedownload.module.css';
import {IInitialState} from "../../../../../store/reducer";
import {useSelector} from "react-redux";
import useDownloader from 'react-use-downloader';

export function ProcessedImageDownload() {
  const processedImage = useSelector<IInitialState, string>(state => state.processedImage.processedImage);
  const { download } = useDownloader();
  const fileUrl = processedImage;
  const filename = 'processed-image.jpg';

  function handleClick() {
    download(fileUrl, filename);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.desc}>Download</span>
    </button>
  );
}
