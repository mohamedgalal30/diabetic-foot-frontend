import React from 'react';
import PropTypes  from 'prop-types';
import PatientForm from './PatientForm'

class NewPatientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {name: '', breed: '', weight: '', temperament: '', hobby_ids: []},
      saving: false
    };
    // this.redirect = this.redirect.bind(this);
    // this.savePatient = this.savePatient.bind(this);
    // this.updatePatientHobbies = this.updatePatientHobbies.bind(this);
    // this.updatePatientState = this.updatePatientState.bind(this);
  }

  componentDidMount

  // updatePatientHobbies(event) {
  //   const patient = this.state.patient;
  //   const hobbyId = event.target.value;
  //   const hobby = this.props.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
  //   const checked = !hobby.checked;
  //   hobby['checked'] = !hobby.checked;
  //   if (checked) {
  //     patient.hobby_ids.push(hobby.id);
  //   } else {  
  //     patient.hobby_ids.splice(patient.hobby_ids.indexOf(hobby.id));
  //   }

  //   this.setState({patient: patient});
  // }

  // updatePatientState(event) {
  //   const field = event.target.name;
  //   const patient = this.state.patient;
  //   patient[field] = event.target.value;
  //   return this.setState({patient: patient});
  // }

  // redirect(patient) {
  //   browserHistory.push(`/patients/${patient.id}`);
  // }

  // savePatient(event) {
  //   event.preventDefault();
  //   this.props.actions.createPatient(this.state.patient)
  //   // .then((patient) => {
  //   //   this.redirect(patient);
  //   // });

  // }
  
  render() {
    return (
      <div>
        <h1>new patient</h1>
        {/* <PatientForm 
          patient={this.state.patient} 
          hobbies={this.props.checkBoxHobbies}
          onSave={this.savePatient}
          onChange={this.updatePatientState}
          onHobbyChange={this.updatePatientHobbies}/> */}
      </div>
    );
  }
}

function hobbiesForCheckBoxes(hobbies) {
  return hobbies.map(hobby => {
    hobby['checked'] = false;
    return hobby;
  });
}

export default NewPatientPage;