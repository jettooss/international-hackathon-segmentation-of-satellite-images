import React from 'react';
import styles from './header.module.css';
import {LogoIcon} from "../Icons/LogoIcon";
import {HeaderStartButton} from "./HeaderStartButton";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoIcon />
        <HeaderStartButton />
      </div>
    </header>
  );
}
