import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import PatientsPage from './components/PatientsPage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Diabetic Foot</h1>
        </header>
        <Switch>
          <Route path='/patients'>
            <PatientsPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
