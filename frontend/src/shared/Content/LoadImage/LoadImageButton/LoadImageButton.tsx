import React, {useState} from 'react';
import styles from './loadimagebutton.module.css';
import {IInitialState} from "../../../../store/reducer";
import {setProcessedImage} from "../../../../store/processedImage/processedImageActions";
import {setUploadedImage} from "../../../../store/uploadedImage/uploadedImageActions";
import {setAllBuildings} from "../../../../store/allBuildings/allBuildingsActions";
import {setLargeBuildings} from "../../../../store/largeBuildings/largeBuildingsActions";
import {setSmallBuildings} from "../../../../store/smallBuildings/smallBuildingsActions";
import {setImageLoaded} from "../../../../store/imageLoaded/imageLoadedActions";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../../../../assets/images/moon.gif';
import {LoadImagePreview} from "../LoadImagePreview";
import axios from "axios";

export function LoadImageButton() {
  const uploadedImage = useSelector<IInitialState, any>(state => state.uploadedImage.uploadedImage);
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e: any) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    setImage(file);
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      dispatch(setUploadedImage(fileReader.result));
    };
  }

  function handleClick() {
    const formData = new FormData();
    formData.append('map', image, image.name);

    setLoading(true);

    axios.post("http://79.174.80.127/ai/", formData)
      .then((res) => {
        const data = res.data.file_path;
        const allBuildings = res.data.all_polygons_count;
        const largeBuildings = res.data.large_polygons_count

        setLoading(false);
        dispatch(setImageLoaded(true));
        dispatch(setProcessedImage(data));
        dispatch(setAllBuildings(allBuildings));
        dispatch(setLargeBuildings(largeBuildings));
        dispatch(setSmallBuildings(allBuildings - largeBuildings));
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
            {uploadedImage.length !== 0
              ? <>
                  <LoadImagePreview previewImage={uploadedImage} />
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
