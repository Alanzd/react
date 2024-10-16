import React, { useState } from 'react';
import styles from "./header.module.css";
//typescript
type HeaderProps = {
  query:string;
  // setQuery es una función
  setQuery : (query:string) => void;
}

const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        placeholder='search a pokemon'
        type='search'
        value={query}
        onChange={(e) => setQuery}     />
    <p>Header</p>
  </header>

  )
}

export default Header