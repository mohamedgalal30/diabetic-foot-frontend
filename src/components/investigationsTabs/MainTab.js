import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class MainTab extends React.Component {

  render() {
    return (
      <div className="row">

        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Neurological</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.main.neurological"
              value={this.props.main.neurological}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Vascular</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.main.vascular"
              value={this.props.main.vascular}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Skin temperature</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.main.skinTemperature"
              value={this.props.main.skinTemperature}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="row">
            <label htmlFor="ck11" className="white-text">Foot pressures</label>
          </div>
          <div className="row">
            <textarea cols={70} rows={4}
              onChange={(e) => this.props.onChange(e)}
              name="investigations.main.footPressures"
              value={this.props.main.footPressures}
            />
          </div>
        </div>

      </div>
    );
  }
}

// MainTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default MainTab;
