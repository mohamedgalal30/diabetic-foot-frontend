import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class PFHTab extends React.Component {
  render() {
    return (
      <div id="test1" className="col s12" >
        <div className="container">
          <div className="row">
            <br />
            <br />
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastFootHistory.previousUlcersAndTreatment} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.previousUlcersAndTreatment" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Past Foot History</label>
              </div>
            </div>



            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastFootHistory.amputations.value} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.amputations.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Amputations</label>
              </div>
              {
                this.props.pastFootHistory.amputations.value ?
                  <div className="col-md-9">

                    <div className="row">
                      <p className="col s4">
                        <input id="major" onChange={(e) => this.props.onChange(e)} type="radio" name="history.pastFootHistory.amputations.type" value="major" />
                        <label htmlFor="major">Major</label>
                      </p>
                      <p className="col s4">
                        <input id="minor" type="radio" onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.amputations.type" value="minor" />
                        <label htmlFor="minor">Minor</label>
                      </p>
                    </div>

                  </div>
                  : null
              }
            </div>


            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastFootHistory.peripheralAngioplasties} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.peripheralAngioplasties" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Peripheral Angioplasties</label>
              </div>
            </div>


            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.pastFootHistory.peripheralArterialBypasses} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.peripheralArterialBypasses" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Peripheral Arterial Bypasses</label>
              </div>
            </div>


            <button className="btn waves-effect waves-red" id="btn21" onClick={(e) => this.props.onSave(e)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

// PFHTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PFHTab;
