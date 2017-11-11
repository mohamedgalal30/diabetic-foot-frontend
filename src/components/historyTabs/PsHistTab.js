import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class PsHist extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  psychosocialHistory: {
    occupation: "",
    numberOfCigarettes: "", //smoked per day
    numberOfUnitsOfAlcohol: "", //per day
    psychiatricIllness: "",
    homeCircumstances: "",
    livesWith: "", //[Alone, friends or relative]
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-3">
            <label className="white-text">Occupation</label>
            <input value={this.props.psychosocialHistory.occupation} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.occupation" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="white-text">Number Of Cigarettes</label>
            <input type="number" value={this.props.psychosocialHistory.numberOfCigarettes} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.numberOfCigarettes" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="white-text">Number Of Units Of Alcohol</label>
            <input type="number" value={this.props.psychosocialHistory.numberOfUnitsOfAlcohol} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.numberOfUnitsOfAlcohol" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="white-text">Psychiatric Illness</label>
            <input value={this.props.psychosocialHistory.psychiatricIllness} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.psychiatricIllness" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="white-text">Home Circumstances</label>
            <input value={this.props.psychosocialHistory.homeCircumstances} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.homeCircumstances" />
          </div>
        </div>
        <div className="col s8">
        <label className="white-text">Lives With</label>
          
          <div className="row">
            <p className="col s4">
              <input id="alone" checked={this.props.psychosocialHistory.livesWith == "alone"} onChange={(e) => this.props.onChange(e)} type="radio" name="history.psychosocialHistory.livesWith" value="alone" />
              <label htmlFor="alone">Alone</label>
            </p>
            <p className="col s4">
              <input id="friendsOrRelative" checked={this.props.psychosocialHistory.livesWith == "friendsOrRelative"} type="radio" onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.livesWith" value="friendsOrRelative" />
              <label htmlFor="friendsOrRelative">Friends or Relative</label>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

// PsHist.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PsHist;
