import React, {useState} from 'react';
import styles from './loadimagebutton.module.css';
import {setImageLoaded} from "../../../../store/imageLoaded/imageLoadedActions";
import {useDispatch} from "react-redux";
import Loading from '../../../../assets/images/moon.gif';
import {LoadImagePreview} from "../LoadImagePreview";
import axios from "axios";

export function LoadImageButton() {
  const [image, setImage] = useState<any>();
  const [previewImage, setPreviewImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e: any) {
    const file = e.target.files[0];
    setImage(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPreviewImage(fileReader.result);
    };
  }

  function handleClick() {
    const formData = new FormData();
    formData.append('map', image, image.name);

    setLoading(true);

    axios.post("http://79.174.80.127/ai/", formData)
      .then((res) => {

        setLoading(false);
        dispatch(setImageLoaded(true));
      })
      .catch((err) => {
        console.log(err.toString());
      })
  }

  return (
    <>
      {loading
        ? <div className={styles.loading} style={{ backgroundImage: `url(${Loading})` }}></div>
        : <>
            {image
              ? <>
                  <LoadImagePreview previewImage={previewImage} />
                  <button className={styles.button} onClick={handleClick}>
                    <span className={styles.desc}>Send</span>
                  </button>
                </>
              : <label className={styles.button} htmlFor="loadImage">
                  <input id="loadImage" type="file" accept="image/*" onChange={handleChange} />
                  <span className={styles.desc}>Load Image</span>
                </label>
            }
          </>
      }
    </>
  );
}
