import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class RadiologicalTab extends React.Component {

  render() {
    return (
      <div className="row">

        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">X-ray</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.radiological.xray"
              value={this.props.radiological.xray}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">MRI</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.radiological.mri"
              value={this.props.radiological.mri}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Duplex</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.radiological.duplex"
              value={this.props.radiological.duplex}
            />
          </div>
        </div>

      </div>
    );
  }
}

// RadiologicalTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default RadiologicalTab;
