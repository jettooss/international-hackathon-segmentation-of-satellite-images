import React from 'react';
import styles from './dialogoptions.module.css';
import {setSearch} from "../../../store/search/searchActions";
import {useDispatch} from "react-redux";

export function DialogOptions() {
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(setSearch('оформить кредит'))}>
          Оформить кредит
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(setSearch('открыть вклад'))}>
          Открыть вклад
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(setSearch('выпустить карту'))}>
          Выпустить карту
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(setSearch('оформить карту'))}>
          Оформить карту
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(setSearch('открыть брокерский счет'))}>
          Открыть брокерский счет
        </button>
      </li>
    </ul>
  );
}
