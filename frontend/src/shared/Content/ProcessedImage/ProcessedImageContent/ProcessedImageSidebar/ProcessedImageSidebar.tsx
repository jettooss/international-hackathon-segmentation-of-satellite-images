import React from 'react';
import styles from './processedimagesidebar.module.css';
import Switch from 'react-switch';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../../../store/reducer";
import {setSwitcher} from "../../../../../store/switcher/switcherActions";
import {PurpleCircleIcon} from "../../../../Icons/PurpleCircleIcon";
import {RedCircleIcon} from "../../../../Icons/RedCircleIcon";
import {YellowCircleIcon} from "../../../../Icons/YellowCircleIcon";

export function ProcessedImageSidebar() {
  const allBuildings = useSelector<IInitialState, number>(state => state.allBuildings.allBuildings);
  const largeBuildings = useSelector<IInitialState, number>(state => state.largeBuildings.largeBuildings);
  const smallBuildings = useSelector<IInitialState, number>(state => state.smallBuildings.smallBuildings);
  const switchOnOff = useSelector<IInitialState, boolean>(state => state.switcher.switcher);
  const dispatch = useDispatch();

  function handleChange() {
    dispatch(setSwitcher(!switchOnOff));
  }

  return (
    <div className={styles.container}>
      <div className={styles.analytics}>
        <div className={styles.data}>
          <span className={styles.secondaryDesc}>All Buildings</span>
          <span className={styles.colorfulCircle}> <PurpleCircleIcon /> </span>
          <span className={styles.mainDesc}>{allBuildings}</span>
        </div>
        <div className={styles.data}>
          <span className={styles.secondaryDesc}>Large Buildings</span>
          <span className={styles.colorfulCircle}> <RedCircleIcon /> </span>
          <span className={styles.mainDesc}>{largeBuildings}</span>
        </div>
        <div className={styles.data}>
          <span className={styles.secondaryDesc}>Small Buildings</span>
          <span className={styles.colorfulCircle}> <YellowCircleIcon /> </span>
          <span className={styles.mainDesc}>{smallBuildings}</span>
        </div>
      </div>
      <div className={styles.switcher}>
        <Switch
          checked={switchOnOff}
          onChange={handleChange}
          checkedIcon={false}
          uncheckedIcon={false}
          activeBoxShadow=""
          onColor="#800080"
          width={60}
        />
      </div>
    </div>
  );
}
