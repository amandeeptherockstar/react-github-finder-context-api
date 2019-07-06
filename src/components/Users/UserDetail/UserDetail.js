import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../../../context/GithubContext/githubContext';
import PropTypes from 'prop-types';
import styles from './UserDetail.module.css';
import Repos from '../../Repos/Repos';
import Pagination from '../../Pagination/Pagination';

function UserDetail(props) {
  const githubContext = useContext(GithubContext);
  const { fetchSingleUser, fetchRepos, repos, selectedUser, nextRepos, prevRepos } = githubContext;
  
  useEffect(() => {
    const username = props.match.params.username;
    fetchSingleUser(username);
    fetchRepos(username);
  }, []);

  if(selectedUser === null){
    return null;
  }
  const {
    login, avatar_url, html_url, name, company, blog, location, hireable, bio, public_repos, public_gists, followers, following
  } = selectedUser;
  return (
    <div className={styles.userDetail}>
      <div className="container">
        <Link to="/home">
          <span className={styles.backButton}>
            <i className="fas fa-arrow-left"></i>&nbsp; Back to Home
          </span>
        </Link> {' '} Hireable {' '}
        { hireable ? <i className={`fas fa-check ${styles.checkColorSuccess}`}></i> : <i className={`fas fa-times ${styles.checkColorDanger}`}></i> }

        <div className={styles.userSection}>
          <div className={styles.profileSection}>
            <img src={avatar_url} alt={login} />
            <h3>{ name }</h3>
            <p>Location: { location || 'N/A'  }</p>
          </div>

          <div className="detailSection">
            <p className="bio">
              <span className="bold">Bio: </span>
              { bio || 'N/A' }
            </p>
            <a href={html_url} target="_blank" className={styles.btn}>Visit Github Profile</a>
            <ul>
              <li>
                <span className="bold">Username: </span> {login || 'N/A'}
              </li>
              <li>
                <span className="bold">Company: </span> {company || 'N/A'}
              </li>
              <li>
                <span className="bold">Website: </span> {blog || 'N/A'}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <span className={`${styles.badge} ${styles.badgePrimary}`}>Followers: {followers}</span>
          <span className={`${styles.badge} ${styles.badgeDanger}`}>Following: {following}</span>
          <span className={`${styles.badge} ${styles.badgeSuccess}`}>Public Repos: {public_repos}</span>
          <span className={`${styles.badge} ${styles.badgeWarning}`}>Public Gists: {public_gists}</span>
        </div>

        {repos.length > 0 ? <Repos userRepos={repos} /> : <h3 style={{textAlign: 'center', margin: '2rem 0'}}>No More Repo's Available</h3>}
        
        <Pagination next={() => nextRepos(login)} prev={() => prevRepos(login)} disableNextButton={repos.length === 0}/>
      </div>
    </div> 
  )
}

export default UserDetail;
