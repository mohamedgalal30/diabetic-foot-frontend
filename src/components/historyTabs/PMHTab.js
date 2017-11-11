import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class PMHTAB extends React.Component {
  render() {
    return (
      <div id="test1" className="col s12" >
        <div className="container">
          <div className="row">
            <br />
            <br />

            <div className="row">
              <label className="white-text">Past Medical History</label>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastMedicalHistory.seriousIllness} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.seriousIllness" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Serious Illness</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastMedicalHistory.accidents} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.accidents" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Accidents</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastMedicalHistory.injuries} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.injuries" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Injuries</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastMedicalHistory.hospitalAdmissions} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.hospitalAdmissions" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Hospital Admissions</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastMedicalHistory.operations} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.operations" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Operations</label>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

// PMHTAB.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PMHTAB;
