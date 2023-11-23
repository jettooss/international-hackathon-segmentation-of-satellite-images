import React from 'react';
import styles from './dialog.module.css';
import {IInitialState} from "../../store/reducer";
import {DialogSearchBar} from "./DialogSearchBar";
import {DialogOptions} from "./DialogOptions";
import {DialogAddresses} from "./DialogAddresses";
import {useSelector} from "react-redux";
import {DialogFiltering} from "./DialogFiltering";

export function Dialog() {
  const filtering = useSelector<IInitialState, boolean>(state => state.filtering.filtering);

  return (
    <div className={styles.container}>
      {filtering
        ? <DialogFiltering />
        : <>
            <DialogSearchBar />
            <DialogOptions />
            <DialogAddresses />
          </>
      }
    </div>
  );
}
