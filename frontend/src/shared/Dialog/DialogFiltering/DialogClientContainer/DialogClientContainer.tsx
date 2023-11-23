import React, {useEffect} from 'react';
import styles from './dialogclientcontainer.module.css';
import {IInitialState} from "../../../../store/reducer";
import {setFiltering} from "../../../../store/filtering/filteringActions";
import {setClient} from "../../../../store/client/clientActions";
import {DialogClient} from "./DialogClient";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export function DialogClientContainer() {
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  function handleClickClose() {
    dispatch(setFiltering(false));
  }

  function handleClickCheckFirst() {
    const element: HTMLSpanElement | null = document.querySelector('.firstInnerCircle');
    const firstElement = element?.parentElement?.parentElement?.parentElement?.children[1].children[1].children[0];
    const secondElement = element?.parentElement?.parentElement?.parentElement?.children[2].children[1].children[0];

    if (secondElement?.classList[2] === undefined) {
      firstElement?.classList.remove('active');
      secondElement?.classList.add('active');
      dispatch(setClient("юридическое"));
    }

    if (firstElement?.classList[2] === undefined) {
      secondElement?.classList.remove('active');
      firstElement?.classList.add('active');
      dispatch(setClient("физическое"));
    }
  }

  function handleClickCheckSecond() {
    const element: HTMLSpanElement | null = document.querySelector('.secondInnerCircle');
    const firstElement = element?.parentElement?.parentElement?.parentElement?.children[1].children[1].children[0];
    const secondElement = element?.parentElement?.parentElement?.parentElement?.children[2].children[1].children[0];

    if (firstElement?.classList[2] === undefined) {
      secondElement?.classList.remove('active');
      firstElement?.classList.add('active');
      dispatch(setClient("физическое"));
    }

    if (secondElement?.classList[2] === undefined) {
      firstElement?.classList.remove('active');
      secondElement?.classList.add('active');
      dispatch(setClient("юридическое"));
    }
  }

  useEffect(() => {
    const firstInnerCircle: HTMLSpanElement | null = document.querySelector('.firstInnerCircle');
    const secondInnerCircle: HTMLSpanElement | null = document.querySelector('.secondInnerCircle');

    if (firstInnerCircle !== null) {
      firstInnerCircle.addEventListener('click', handleClickCheckFirst);
    }

    if (secondInnerCircle !== null) {
      secondInnerCircle.addEventListener('click', handleClickCheckSecond);
    }

    return () => {
      if (firstInnerCircle !== null) {
        firstInnerCircle.removeEventListener('click', handleClickCheckFirst);
      }

      if (secondInnerCircle !== null) {
        secondInnerCircle.removeEventListener('click', handleClickCheckSecond);
      }
    }
  }, [])

  return (
    <DialogClient
      handleClickClose={handleClickClose}
    />
  );
}
