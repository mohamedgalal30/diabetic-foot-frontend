import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class FHistTab extends React.Component {
  render() {
    return (
      <div className="row">
         <div className="row">
              <div className="col-md-3">
                <input checked={this.props.familyHistory.diabetes} onChange={(e) => this.props.onChange(e)} name="history.familyHistory.diabetes" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Diabetes</label>
              </div>
            </div>

        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Other Serious Illness</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="history.familyHistory.otherSeriousIllness"
              value={this.props.familyHistory.otherSeriousIllness}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">cause Of Death Of Near Relatives</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="history.familyHistory.causeOfDeathOfNearRelatives"
              value={this.props.familyHistory.causeOfDeathOfNearRelatives}
            />
          </div>
        </div>

      </div>
    );
  }
}

// FHistTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default FHistTab;
