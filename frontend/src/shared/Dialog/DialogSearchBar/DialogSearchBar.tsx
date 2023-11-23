import React from 'react';
import styles from './dialogsearchbar.module.css';
import {IInitialState} from "../../../store/reducer";
import {DialogSearch} from "./DialogSearch";
import {DialogFilters} from "./DialogFilters";
import {useSelector} from "react-redux";
import {SearchIcon} from "../../Icons/SearchIcon";

export function DialogSearchBar() {
  const value = useSelector<IInitialState, string>(state => state.search.search);

  return (
    <div className={styles.container}>
      <DialogSearch />
      {value.length !== 0 && (
        <span className={styles.icon}><SearchIcon /></span>
      )}
      <DialogFilters />
    </div>
  );
}
