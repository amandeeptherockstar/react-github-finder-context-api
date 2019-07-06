import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './UserItem.module.css';

function UserItem(props) {
  return (
    <div className={styles.userItem}>
      <img src={props.user.avatar_url} alt={props.user.login} className={styles.imageRound} />
      <h3>{props.user.login}</h3>
      <Link to={'user/' + props.user.login}>More</Link>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;