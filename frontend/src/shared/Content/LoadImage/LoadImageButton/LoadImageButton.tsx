import React, {useState} from 'react';
import styles from './loadimagebutton.module.css';
import axios from "axios";
import Loading from '../../../../assets/images/moon.gif';

export function LoadImageButton() {
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);

  function handleChange(e: any) {
    const file = e.target.files[0];
    setImage(file);
  }

  function handleClick() {
    const formData = new FormData();
    formData.append('map', image, image.name);

    setLoading(true);

    axios.post("http://79.174.80.127/ai/", formData)
      .then((res) => {
        console.log(res);
        setLoading(false);
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
              ? <button className={styles.button} onClick={handleClick}>
                  <span className={styles.desc}>Send</span>
                </button>
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
