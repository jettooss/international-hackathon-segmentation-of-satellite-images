import React from 'react';
import styles from './processedimagesidebar.module.css';
import Switch from 'react-switch';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../../../store/reducer";
import {setSwitcher} from "../../../../../store/switcher/switcherActions";

export function ProcessedImageSidebar() {
  const switchOnOff = useSelector<IInitialState, boolean>(state => state.switcher.switcher);
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(setSwitcher(!switchOnOff));
  }

  return (
    <div className={styles.container}>
      <div className={styles.switcher}>
        <span className={styles.switcherDesc}>Processed</span>
        <Switch
          checked={switchOnOff}
          onChange={handleChange}
          checkedIcon={false}
          uncheckedIcon={false}
          activeBoxShadow=""
          onColor="#23ACDE"
          width={60}
        />
        <span className={styles.switcherDesc}>Uploaded</span>
      </div>
    </div>
  );
}
