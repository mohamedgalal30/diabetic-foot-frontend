import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class DHistTab extends React.Component {
  render() {
    let { onChange } = this.props;
    return (
      <div id="test1" className="col s12" >
        <div className="container">
          <div className="row">
            <br />
            <br />
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="ck11" className="white-text">Type Of Diabetes</label>
                <div className="col s8">
                  <div className="row">
                    <p className="col s4">
                      <input id="type1" checked={this.props.diabeticHistory.typeOfDiabetes == "type1"} onChange={(e) => onChange(e)} type="radio" name="history.diabeticHistory.typeOfDiabetes" value="type1" />
                      <label htmlFor="type1">Type1</label>
                    </p>
                    <p className="col s4">
                      <input id="type2" checked={this.props.diabeticHistory.typeOfDiabetes == "type2"} type="radio" onChange={(e) => onChange(e)} name="history.diabeticHistory.typeOfDiabetes" value="type2" />
                      <label htmlFor="type2">Type2</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div className="row">
              <div className="col-md-3">
                <div className="col-md-3">
                  <label htmlFor="ck11" className="white-text">Duration Of Diabetes</label>
                  <div className="col s8">
                    <div className="row">
                      <p className="col s4">
                        <input id="discover" checked={this.props.diabeticHistory.durationOfDiabetes.value == "discover"} onChange={(e) => onChange(e)} type="radio" name="history.diabeticHistory.durationOfDiabetes.value" value="discover" />
                        <label htmlFor="discover">Discover</label>
                      </p>
                      <p className="col s4">
                        <input id="treatment" checked={this.props.diabeticHistory.durationOfDiabetes.value == "treatment"} type="radio" onChange={(e) => onChange(e)} name="history.diabeticHistory.durationOfDiabetes.value" value="treatment" />
                        <label htmlFor="treatment">Treatment</label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9">

                <div className="row form-group">
                  <div className="row">
                    <label htmlFor="ck11" className="white-text">Details</label>
                  </div>
                  <div className="row">
                    <textarea cols={70} rows={4}
                      onChange={(e) => this.props.onChange(e)}
                      name="history.diabeticHistory.durationOfDiabetes.details"
                      value={this.props.diabeticHistory.durationOfDiabetes.details}
                    />
                  </div>
                </div>

              </div>
            </div>


            <div className="row">
              <div className="col-md-3">
                <div className="col-md-3">
                  <label htmlFor="ck11" className="white-text">Treatment Of Diabetes</label>
                  <div className="col s8">
                    <div className="row">
                      <p className="col s4">
                        <input id="insulin" checked={this.props.diabeticHistory.treatmentOfDiabetes.value == "insulin"} onChange={(e) => onChange(e)} type="radio" name="history.diabeticHistory.treatmentOfDiabetes.value" value="insulin" />
                        <label htmlFor="insulin">Discover</label>
                      </p>
                      <p className="col s4">
                        <input id="oralHypoglycemic" checked={this.props.diabeticHistory.treatmentOfDiabetes.value == "oralHypoglycemic"} type="radio" onChange={(e) => onChange(e)} name="history.diabeticHistory.treatmentOfDiabetes.value" value="oralHypoglycemic" />
                        <label htmlFor="oralHypoglycemic">Oral Hypoglycemic</label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9">

                <div className="row form-group">
                  <div className="row">
                    <label htmlFor="ck11" className="white-text">Details</label>
                  </div>
                  <div className="row">
                    <textarea cols={70} rows={4}
                      onChange={(e) => this.props.onChange(e)}
                      name="history.diabeticHistory.treatmentOfDiabetes.details"
                      value={this.props.diabeticHistory.treatmentOfDiabetes.details}
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="row">
              <label className="white-text">Complications Of Diabetes</label>
            </div>
            <div className="row">
            <div className="col-md-3">
              <input checked={this.props.diabeticHistory.complicationsOfDiabetes.retinopathy} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.retinopathy" type="checkbox" />
              <label htmlFor="ck11" className="white-text">Retinopathy</label>
            </div>
          </div>
          <div className="row">
              <div className="col-md-3">
                <input checked={this.props.diabeticHistory.complicationsOfDiabetes.nephropathy} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.nephropathy" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Nephropathy</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.diabeticHistory.complicationsOfDiabetes.cardiovascular} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.cardiovascular" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Cardiovascular</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.diabeticHistory.complicationsOfDiabetes.cerebrovascular} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.cerebrovascular" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Cerebrovascular</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// DHistTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default DHistTab;
