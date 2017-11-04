import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientsPage from './components/PatientsPage'
import NewPatientPage from './components/NewPatientPage'
import UpdatePatientPage from './components/UpdatePatientPage'
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
          <Route path="/patients" exact component={PatientsPage} />
          <Route path="/patients/new" exact component={UpdatePatientPage} />
          <Route path="/patients/:id/edit" exact component={UpdatePatientPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
