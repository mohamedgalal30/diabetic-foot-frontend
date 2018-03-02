import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import HistoryTab from './HistoryTab'
import ExaminationTab from './ExaminationTab'
import InvestigationsTab from './InvestigationsTab'
import DiagnosisTab from './DiagnosisTab'
import patient from '../schema'

function index(obj, is, value) {
  if (typeof is === 'string')
    return index(obj, is.split('.'), value);
  else if (is.length === 1 && value !== undefined)
    return obj[is[0]] = value;
  else if (is.length === 0)
    return obj;
  else
    return index(obj[is[0]] || { [is[0]]: {} }, is.slice(1), value);
}

class UpdatePatientPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: patient,
      tab: 1
    }
    this.nextTab = this.nextTab.bind(this);
    this.prevTab = this.prevTab.bind(this);
    this.changeTab = this.changeTab.bind(this);
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
    let patient = this.state.patient;
    const field = event.target.name;
    let value = event.target.value;
    if (event.target.type === 'checkbox')
      value = event.target.checked;
    index(patient, field, value)
    return this.setState({ patient });
  }

  changeTab(tab) {
    this.setState({ tab })
  }

  nextTab() {
    let tab = this.state.tab;
    if (tab < 15) this.setState({ tab: ++tab })
  }
  prevTab() {
    let tab = this.state.tab;
    if (tab > 1) this.setState({ tab: --tab })
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
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        TabContent = <HistoryTab
          history={this.state.patient.history}
          onChange={this.updatePatientState}
          nextTab={this.nextTab}
          prevTab={this.prevTab}
          changeTab={this.changeTab}
          tab={this.state.tab}
        />
        break;
      case 9:
      case 10:
      case 11:
        TabContent = <ExaminationTab
          examination={this.state.patient.examination}
          onChange={this.updatePatientState}
          nextTab={this.nextTab}
          prevTab={this.prevTab}
          changeTab={this.changeTab}
          tab={this.state.tab}
        />
        break;
      case 12:
      case 13:
      case 14:
        TabContent = <InvestigationsTab
          investigations={this.state.patient.investigations}
          onChange={this.updatePatientState}
          nextTab={this.nextTab}
          prevTab={this.prevTab}
          changeTab={this.changeTab}
          tab={this.state.tab}
        />
        break;
      case 15:
        TabContent = <DiagnosisTab
          diagnosis={this.state.patient.diagnosis}
          onChange={this.updatePatientState}
          nextTab={this.nextTab}
          prevTab={this.prevTab}
          changeTab={this.changeTab}
          tab={this.state.tab}
        />
        break;
      default:
        TabContent = null;
    }
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className={`tab col s4 ${([1, 2, 3, 4, 5, 6, 7, 8].indexOf(tab) != -1) ? 'active' : ""}`} onClick={this.changeTab.bind(this, 1)}><a title="History">History</a></li>
          <li className={`tab col s4 ${([9, 10, 11].indexOf(tab) != -1) ? 'active' : ""}`} onClick={this.changeTab.bind(this, 9)} ><a title="Examination">Examination</a></li>
          <li className={`tab col s4 ${([12, 13, 14].indexOf(tab) != -1) ? 'active' : ""}`} onClick={this.changeTab.bind(this, 12)} ><a title="Investigations">Investigations</a></li>
          <li className={`tab col s4 ${([15].indexOf(tab) != -1) ? 'active' : ""}`} onClick={this.changeTab.bind(this, 15)} ><a title="Diagnosis">Diagnosis</a></li>
        </ul>
        <div>
          {TabContent}
        </div>
        <hr />
        <div className="col s4">
          <button className="btn waves-effect waves-red" onClick={this.prevTab}>Prev</button>
          <button className="btn waves-effect waves-red" onClick={this.nextTab}>Next</button>
          <button className="btn waves-effect waves-red" onClick={this.savePatient}>Save</button>
        </div>
      </div>
    );
  }
}

export default UpdatePatientPage;