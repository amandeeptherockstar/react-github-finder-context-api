import React from 'react';
import PropTypes from 'prop-types';

import styles from './RepoItem.module.css';

function RepoItem(props) {
  const {
    name,
    html_url,
    stargazers_count,
    forks_count
  } = props.repo;
  return (
    <div className={styles.repoItem}>

      <div>
        <a href={html_url} target="_blank" className={styles.repoLink}>{ name }</a>
      </div>

      <div className={styles.repoTail}>
        <span className={styles.stars}>
          <i className="fas fa-star"></i>
          {stargazers_count}
        </span>
        <span className={styles.forks}>
          <i className="fas fa-code-branch"></i>
          { forks_count }
        </span>
      </div>

    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;