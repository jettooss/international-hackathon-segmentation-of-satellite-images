import React, {useEffect} from "react";
import styles from './dialogroutecontainer.module.css';
import {IInitialState} from "../../../../store/reducer";
import {setRoute} from "../../../../store/route/routeActions";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {DialogRoute} from "./DialogRoute";

export function DialogRouteContainer() {
  const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();

  function handleClickCheckThird() {
    const element: HTMLSpanElement | null = document.querySelector('.thirdInnerCircle');
    const thirdElement = element?.parentElement?.parentElement?.parentElement?.children[1].children[1].children[0];
    const fourthElement = element?.parentElement?.parentElement?.parentElement?.children[2].children[1].children[0];

    if (fourthElement?.classList[2] === undefined) {
      thirdElement?.classList.remove('active');
      fourthElement?.classList.add('active');
      dispatch(setRoute("автомобильный"));
    }

    if (thirdElement?.classList[2] === undefined) {
      fourthElement?.classList.remove('active');
      thirdElement?.classList.add('active');
      dispatch(setRoute("пешеходный"));
    }
  }

  function handleClickCheckFourth() {
    const element: HTMLSpanElement | null = document.querySelector('.fourthInnerCircle');
    const thirdElement = element?.parentElement?.parentElement?.parentElement?.children[1].children[1].children[0];
    const fourthElement = element?.parentElement?.parentElement?.parentElement?.children[2].children[1].children[0];

    if (thirdElement?.classList[2] === undefined) {
      fourthElement?.classList.remove('active');
      thirdElement?.classList.add('active');
      dispatch(setRoute("пешеходный"));
    }

    if (fourthElement?.classList[2] === undefined) {
      thirdElement?.classList.remove('active');
      fourthElement?.classList.add('active');
      dispatch(setRoute("автомобильный"));
    }
  }

  useEffect(() => {
    const thirdInnerCircle: HTMLSpanElement | null = document.querySelector('.thirdInnerCircle');
    const fourthInnerCircle: HTMLSpanElement | null = document.querySelector('.fourthInnerCircle');

    if (thirdInnerCircle !== null) {
      thirdInnerCircle.addEventListener('click', handleClickCheckThird);
    }

    if (fourthInnerCircle !== null) {
      fourthInnerCircle.addEventListener('click', handleClickCheckFourth);
    }

    return () => {
      if (thirdInnerCircle !== null) {
        thirdInnerCircle.removeEventListener('click', handleClickCheckThird);
      }

      if (fourthInnerCircle !== null) {
        fourthInnerCircle.removeEventListener('click', handleClickCheckFourth);
      }
    }
  }, [])

  return (
    <DialogRoute />
  );
}
