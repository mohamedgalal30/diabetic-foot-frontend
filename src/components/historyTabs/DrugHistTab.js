import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class DrugHist extends React.Component {

  render() {
    return (
      <div className="row">

        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Present Medication</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="history.drugHistory.presentMedication"
              value={this.props.drugHistory.presentMedication}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Known Allergies</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="history.drugHistory.knownAllergies"
              value={this.props.drugHistory.knownAllergies}
            />
          </div>
        </div>

        <button className="btn waves-effect waves-red" id="btn21" onClick={(e) => this.props.onSave(e)}>Next</button>

      </div>
    );
  }
}

// DrugHist.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default DrugHist;
