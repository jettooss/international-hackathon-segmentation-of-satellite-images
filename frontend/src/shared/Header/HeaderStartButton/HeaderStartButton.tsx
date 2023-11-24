import React from 'react';
import styles from './headerstartbutton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "../../../store/reducer";
import {setStartButtonClicked} from "../../../store/startButtonClicked/startButtonClickedActions";

export function HeaderStartButton() {
  const startButtonClicked = useSelector<IInitialState, boolean>(state => state.startButtonClicked.startButtonClicked);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setStartButtonClicked(!startButtonClicked));
  }

  return (
    <button
      className={styles.button}
      style={{
        opacity: startButtonClicked ? "0" : "1",
        visibility: startButtonClicked ? "hidden" : "visible"
      }}
      onClick={handleClick}
    >
      <span className={styles.desc}>Get Started</span>
    </button>
  );
}
