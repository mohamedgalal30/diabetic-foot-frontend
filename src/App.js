import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PatientsPage from './components/PatientsPage'
import UpdatePatientPage from './components/UpdatePatientPage'
import HomePage from './components/HomePage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header navbar navbar-default">
          <a className="navbar-brand pull-left">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Diabetic Foot</h1>
          </a>
          <div className="navbar-right pull-right">
            <Link to="/patients" className="btn btn-primary btn-lg">Patients List</Link>
          </div>
        </header>


        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/patients" exact component={PatientsPage} />
          <Route path="/patients/new" exact component={UpdatePatientPage} />
          <Route path="/patients/:id/edit" exact component={UpdatePatientPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
