import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import PatientList from './PatientList';
// import NewPatientPage from './NewPatientPage';

class PatientsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      patients: []
    }
  }
  componentWillMount() {
    window.getPatients(patients => {
      this.setState({
        patients: patients
      })
    })
  }

  render() {
    const patients = this.state.patients;
    // const patients = this.props.patients;
    return (
      <div className="col-md-12">
        <h1>Patients <Link to={'/patients/new'} className="btn btn-primary">+ Patient</Link></h1>
        <div className="col-md-4">
          <PatientList patients={patients} />
        </div>
      </div>
    );
  }
}

// PatientsPage.propTypes = {
//   Patients: PropTypes.array.isRequired,
//   children: PropTypes.object
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     Patients: state.Patients
//   };
// }

// export default connect(mapStateToProps)(PatientsPage);
export default PatientsPage;





