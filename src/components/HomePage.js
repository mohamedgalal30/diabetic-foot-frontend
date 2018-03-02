import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Diabetic Foot</h1>
        <h1>Diabetic Foot</h1>
        <Link to="/patients" className="btn btn-primary btn-lg">Patients List</Link>
      </div>
    );
  }
}

export default HomePage;