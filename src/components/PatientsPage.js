import React from 'react';
// import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import PatientList from './PatientList';

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
        patients: patients || []
      })
    })
  }

  search(e) {
    window.getPatients(e.target.value, patients => {
      this.setState({
        patients: patients || []
      })
    })
  }

  render() {
    const patients = this.state.patients;
    // const patients = this.props.patients;
    return (
      <div className="container-fluid">
        <div className="col-md-12">
        <div className="pull-left">
          <h1 className="text-left">Patients <Link to={'/patients/new'} className="btn btn-primary">+ Patient</Link></h1>
          </div>
          <div className="form-group">
            <input className="form-control" onChange={(e) => this.search(e)} name="history.presentingComplaint.skinBreakdown.value" />
          </div>
          <div className="row">
            <PatientList patients={patients} />
          </div>
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





