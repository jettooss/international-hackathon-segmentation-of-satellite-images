import React from 'react';
import styles from './dialogfilters.module.css';
import {setFiltering} from "../../../../store/filtering/filteringActions";
import {FiltersIcon} from "../../../Icons/FiltersIcon";
import {useDispatch} from "react-redux";

export function DialogFilters() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setFiltering(true));
  }

  return (
    <button className={styles.icon} onClick={handleClick}>
      <FiltersIcon />
    </button>
  );
}
