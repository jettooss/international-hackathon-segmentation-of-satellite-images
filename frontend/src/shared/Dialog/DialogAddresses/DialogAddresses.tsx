import React from 'react';
import styles from './dialogaddresses.module.css';
import {DialogAddress} from "./DialogAddress";
import {Title} from "../../Title";

export function DialogAddresses() {
  return (
    <div className={styles.container}>
      <Title text="Ближайшие отделения" />
      <ul className={styles.list}>
        <DialogAddress address="г. Москва, Красная площадь, д.3" />
        <DialogAddress address="г. Москва, Б. Черкасский пер., д.10/11, стр.1" />
      </ul>
    </div>
  );
}
