import React, { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_SINGLE_USER,
  GET_REPOS,
  GET_NEXT_REPOS,
  GET_PREV_REPOS
} from './types';

export const GithubContext = React.createContext();

function GithubContextProvider(props) {
  const initialState = {
    users: [],
    selectedUser: null,
    repos: [],
    repoPageCount: null,
    totalSearchCount: null
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // get Users from Gihub Based on search query
  async function searchUsers(username) {
    const {data} = await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    // dispatch the action
    dispatch({
      type: SEARCH_USERS,
      payload: {
        users: data.items,
        totalSearchCount: data.total_count
      }
    });
    // this.setState({
    //   users: data.items,
    //   selectedUser: null,
    //   totalSearchCount: data.total_count
    // });
  }
  
  // clear users from state
  const clearUser = () => dispatch({
    type: CLEAR_USERS
  });

  // get single user detail from Github
  const getSingleUser = async (username) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
    dispatch({
      type: GET_SINGLE_USER,
      payload: data
    });

    // this.setState({
    //   selectedUser: data
    // });
  }

  // get Repos from Github
  const getRepos = async (username, pageCount) => {
    const repoPageCount = pageCount || 1;
    // const { repoPageCount } = state;
    const {data} = await axios.get(`https://api.github.com/users/${username}/repos?page=${repoPageCount}&per_page=5&sort=created&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);

    dispatch({
      type: GET_REPOS,
      payload: data
    });
  }

  // get next repo 
  const getNextRepos = (username) => {
    dispatch({
      type: GET_NEXT_REPOS
    });
    getRepos(username, state.repoPageCount + 1);
  }
  // get previous repo
  const getPreviousRepos = (username) => {
    if(state.repoPageCount > 1){
      dispatch({
        type: GET_PREV_REPOS
      });
      getRepos(username, state.repoPageCount - 1);
    }
  }

  return (
    <GithubContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      repos: state.repos,
      repoPageCount: state.repoPageCount,
      totalSearchCount: state.totalSearchCount,
      searchUsers,
      clearUser,
      fetchSingleUser: getSingleUser,
      fetchRepos: getRepos,
      nextRepos: getNextRepos,
      prevRepos: getPreviousRepos
    }}>
      { props.children }
    </GithubContext.Provider>
  )
}

export default GithubContextProvider;