import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_SINGLE_USER,
  GET_REPOS,
  GET_NEXT_REPOS,
  GET_PREV_REPOS
} from './types';

export default (state, action) => {
  switch(action.type){
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload.users,
        selectedUser: null,
        totalSearchCount: action.payload.totalSearchCount
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        selectedUser: null,
        repos: [],
        repoPageCount: null,
        totalSearchCount: null
      }
    case GET_SINGLE_USER:
    return {
      ...state,
      repoPageCount: 1,
      selectedUser: action.payload
    }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case GET_NEXT_REPOS:
      console.log(state);
      return {
        ...state,
        repoPageCount: state.repoPageCount + 1
      }
    case GET_PREV_REPOS: 
      console.log(state); 
      return {
        ...state,
        repoPageCount: state.repoPageCount - 1
      }
    default:
      return state;
  }
}