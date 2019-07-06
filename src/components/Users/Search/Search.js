import React, { useState, useContext } from 'react';
import styles from './Search.module.css';
import { GithubContext } from '../../../context/GithubContext/githubContext' ;

export default function Search(props) {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const { searchUsers, users, clearUser } = githubContext;

  const onChangeHandler = (event) => {
    setText(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Form Submit');
    searchUsers(text);
    setText('');
  }
  return (
    <div className={styles.search}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Search Users" className={styles.formControl} value={text} onChange={onChangeHandler}/>
          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Search</button>
          {users.length > 0 && <button type="button" onClick={clearUser} className={`${styles.btn} ${styles.btnClear}`}>Clear</button>}
        </div>
      </form>
    </div>
  )
}