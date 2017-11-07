import React from 'react';
import PropTypes from 'prop-types';
import PatientForm from './PatientForm'
import InfoTab from './InfoTab'
import HistoryTab from './HistoryTab'

class UpdatePatientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {
        info: { name: "", age: "", gender: "", address: "", phone: "", job: "" },
      },
      tab: 'info'
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

  changeTab(tab) {
    this.setState({ tab })
  }

  updatePatientState(event, tabName) {
    const field = event.target.name;
    const patient = this.state.patient;
    patient[tabName][field] = event.target.value;
    return this.setState({ patient: patient });
  }


  savePatient(event) {
    event.preventDefault();
    let id = this.props.match.params.id;
    if (id) {
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
    let tab = this.state.tab;
    let TabContent;
    switch (tab) {
      case "info":
        TabContent = <InfoTab
          patient={this.state.patient.info}
          onSave={this.savePatient}
          onChange={this.updatePatientState}
        />
        break;
      case 'history':
        TabContent = <HistoryTab
          patient={this.state.patient.info}
          onSave={this.savePatient}
          onChange={this.updatePatientState}
        />
        break;
    }
    return (
      <div>
        <ul class="tabs z-depth-1 ">
          <li class={`tab col s4 ${tab=="info"?'active': ""}`} onClick={this.changeTab.bind(this, 'info')}><a title="Personal Information">Patient Info</a></li>
          <li class={`tab col s4 ${tab=="history"?'active': ""}`} onClick={this.changeTab.bind(this, 'history')} ><a title="History">History</a></li>
        </ul>
        <div>
          <h1>Update Patient</h1>
          {TabContent}
        </div>
      </div>
    );
  }
}

export default UpdatePatientPage;