import React from "react";
import styles from './dialogaddress.module.css';
import {PointerIcon} from "../../../Icons/PointerIcon";

interface DialogAddress {
  address: string;
}

export function DialogAddress({ address }: DialogAddress) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}><PointerIcon /></span>
      <span className={styles.address}>{address}</span>
    </li>
  );
}
