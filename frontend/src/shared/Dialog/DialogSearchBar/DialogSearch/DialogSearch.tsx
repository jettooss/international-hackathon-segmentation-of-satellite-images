import React, {ChangeEvent} from 'react';
import styles from './dialogsearch.module.css';
import {IInitialState} from "../../../../store/reducer";
import {setSearch} from "../../../../store/search/searchActions";
import {useDispatch, useSelector} from "react-redux";

export function DialogSearch() {
  const value = useSelector<IInitialState, string>(state => state.search.search);
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setSearch(e.target.value));
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="введите запрос"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
