import React from 'react';
import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class PCompTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="test1" className="col s12">
        <div className="container">
          <div className="row">
            <br />
            <br />
            <div className="row">
              <input onChange={(e)=>this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.value" type="checkbox" id="ck11" />
              <label htmlFor="ck11" className="white-text">Skin Breakdown</label>
            </div>

            <div className="row">
              <input onChange={(e)=>this.props.onChange(e)} name="history.presentingComplaint.swelling.value" type="checkbox" id="ck12" />
              <label htmlFor="ck12" className="white-text">Swelling</label>
            </div>

            <div className="row">
              <input onChange={(e)=>this.props.onChange(e)} name="history.presentingComplaint.colorChange.value" type="checkbox" id="ck13" />
              <label htmlFor="ck13" className="white-text">Color Change</label>
            </div>

            <div className="row">
              <input onChange={(e)=>this.props.onChange(e)} name="history.presentingComplaint.pain.value" type="checkbox" id="ck14" />
              <label htmlFor="ck14" className="white-text">Pain</label>
            </div>

            <button className="btn waves-effect waves-red" id="btn21" onClick={(e)=>this.props.onSave(e)}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

// PCompTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PCompTab;
