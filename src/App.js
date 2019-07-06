import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import GithubContextProvider from './context/GithubContext/githubContext';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search/Search';
import About from './components/About/About';
import UserDetail from './components/Users/UserDetail/UserDetail';

class App extends Component {
  render() {
    return (
      <GithubContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" render={(props) => {
                  return (
                    <React.Fragment>
                      <Search />
                      <Users />
                    </React.Fragment>
                  );
                }} />
                <Route exact path="/user/:username" render={(props) => <UserDetail {...props} /> } />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubContextProvider>
    );
  }
}

export default App;
