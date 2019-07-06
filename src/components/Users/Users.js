import React, { useContext } from 'react';
import { GithubContext } from '../../context/GithubContext/githubContext';
import styles from './Users.module.css';
import UserItem from './UserItem/UserItem';

function Users() {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext;
  return (
    <div className={styles.users}>
      {users.map((user) => {
        return (
          <UserItem key={user.id} user={user}/>
        )
      })}
    </div>
  )
}

export default Users;