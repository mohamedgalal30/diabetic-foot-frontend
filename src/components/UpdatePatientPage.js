import React from 'react';
// import PropTypes from 'prop-types';
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
              value: false,
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
              value: false,
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
              value: false,
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
              value: false,
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
          },
          pastFootHistory: {
            previousUlcersAndTreatment: false,
            amputations: {
              value: false,
              type: "" //[major or minor]
            },
            peripheralAngioplasties: false,
            peripheralArterialBypasses: false
          },
          diabeticHistory: {
            typeOfDiabetes: "", // [type1, type2]
            durationOfDiabetes: {
              value: "", //[discover, treatment]
              details: ""
            },
            treatmentOfDiabetes: {
              value: "",//[Insulin, oral hypoglycemic] 
              details: ""
            },
            complicationsOfDiabetes: {
              retinopathy: false,
              nephropathy: false,
              cardiovascular: false,
              cerebrovascular: false,
            }
          },
          pastMedicalHistory: {
            seriousIllness: false,
            accidents: false,
            injuries: false,
            hospitalAdmissions: false,
            operations: false,
          },
          drugHistory: {
            presentMedication: "",
            knownAllergies: "",
          },
          familyHistory: {
            diabetes: false,
            otherSeriousIllness: "",
            causeOfDeathOfNearRelatives: ""
          },
          psychosocialHistory:{
            occupation: "",
            numberOfCigarettes: "", //smoked per day
            numberOfUnitsOfAlcohol:"", //per day
            psychiatricIllness: "",
            homeCircumstances: "",
            livesWith: "" , //[Alone, friends or relative]
          }
        },
        tab: 'info'
      }
    }
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
    let value = event.target.value;
    if (event.target.type == 'checkbox')
      value = event.target.checked;
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
      console.log("save", this.state.patient)
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
          info={this.state.patient.info}
          onSave={this.savePatient}
          onChange={this.updatePatientState}
        />
        break;
      case 'history':
        TabContent = <HistoryTab
          history={this.state.patient.history}
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