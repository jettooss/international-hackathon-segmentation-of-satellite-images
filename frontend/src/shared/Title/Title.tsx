import React from "react";
import styles from './title.module.css';

interface Title {
  text: string;
}

export function Title({ text }: Title) {
  return (
    <h3 className={styles.title}>{text}</h3>
  );
}
