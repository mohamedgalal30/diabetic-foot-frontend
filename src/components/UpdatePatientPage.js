import React from 'react';
import PropTypes from 'prop-types';
import PatientForm from './PatientForm'

class UpdatePatientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: { name: '' },
      // saving: false
    };
    this.savePatient = this.savePatient.bind(this);
    this.updatePatientState = this.updatePatientState.bind(this);
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    if (id) {
      window.getPatient(id, patient => {
        this.setState({
          patient: patient
        })
      })
    }
  }

  updatePatientState(event) {
    const field = event.target.name;
    const patient = this.state.patient;
    patient[field] = event.target.value;
    return this.setState({ patient: patient });
  }


  savePatient(event) {
    event.preventDefault();
    let id = this.props.match.params.id;
    if(id){
      window.updatePatient(id, this.state.patient, res => {
        this.props.history.push('/patients')
      })
    } else {
      window.createPatient(this.state.patient, res => {
      })
      this.props.history.push('/patients')
    }
  }

  render() {
    return (
      <div>
        <h1>Update Patient</h1>
        {<PatientForm
          patient={this.state.patient}
          onSave={this.savePatient}
          onChange={this.updatePatientState}
        />}
      </div>
    );
  }
}

export default UpdatePatientPage;