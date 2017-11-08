import React from 'react';
import PropTypes from 'prop-types';
import PatientForm from './PatientForm'
import InfoTab from './InfoTab'
import HistoryTab from './HistoryTab'

function index(obj, is, value) {
  if (typeof is == 'string')
    return index(obj, is.split('.'), value);
  else if (is.length == 1 && value !== undefined)
    return obj[is[0]] = value;
  else if (is.length == 0)
    return obj;
  else
    return index(obj[is[0]] || { [is[0]]: {} }, is.slice(1), value);
}

class UpdatePatientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {
        info: { name: "", age: "", gender: "", address: "", phone: "", job: "" },
        history: {
          presentingComplaint: {
            skinBreakdown: {
              value: "",
              details: {
                whereIsTheProblem: "",
                whenDidItStart: "",
                howDidItStart: "",
                whatMakesItBetter: "",
                whatMakesItWorse: "",
                howHasItBeenTreated: "",
              }
            },
            swelling: {
              value: "",
              details: {
                whereIsTheProblem: "",
                whenDidItStart: "",
                howDidItStart: "",
                whatMakesItBetter: "",
                whatMakesItWorse: "",
                howHasItBeenTreated: "",
              }
            },
            colorChange: {
              value: "",
              details: {
                whereIsTheProblem: "",
                whenDidItStart: "",
                howDidItStart: "",
                whatMakesItBetter: "",
                whatMakesItWorse: "",
                howHasItBeenTreated: "",
              }
            },
            pain: {
              value: "",
              details: {
                whenDidItStart: "",
                howDidItStart: "",
                wasThereAnInjury: "",
                whereIsThePain: "",
                whatIsItsNature: "",
                whatAggravatesThePain: "",
                whatRelievesThePain: "",
                whenDoesItOccur: "",
              }
            },
          }
        },
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

  updatePatientState(event) {
    let patient = this.state.patient;
    const field = event.target.name;
    const value = event.target.value;
    index(patient, field, value)
    return this.setState({ patient });
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
        this.props.history.push('/patients')
      })
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
        <ul className="tabs z-depth-1 ">
          <li className={`tab col s4 ${tab == "info" ? 'active' : ""}`} onClick={this.changeTab.bind(this, 'info')}><a title="Personal Information">Patient Info</a></li>
          <li className={`tab col s4 ${tab == "history" ? 'active' : ""}`} onClick={this.changeTab.bind(this, 'history')} ><a title="History">History</a></li>
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