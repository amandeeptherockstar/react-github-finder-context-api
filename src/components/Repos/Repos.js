import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem/RepoItem';


function Repos(props) {
  return (
    <ul className="repos">
      <h2 style={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'center'}}>User Repo's</h2>
      {props.userRepos.map((repo) => {
        return (
          <RepoItem key={repo.id} repo={repo} />
        )
      })}
    </ul>
  )
}

Repos.propTypes = {
  userRepos: PropTypes.array.isRequired
}

export default Repos;