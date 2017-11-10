import React from 'react';
import PropTypes from 'prop-types';

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
              <div className="col-md-3">
                <input checked={this.props.presentingComplaint.skinBreakdown.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Skin Breakdown</label>
              </div>
              {
                this.props.presentingComplaint.skinBreakdown.value ?
                  <div className="col-md-9">

                    <div class="row form-group">
                      <div class="row">
                        <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                      </div>
                      <div class="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.whereIsTheProblem"
                          value={this.props.presentingComplaint.skinBreakdown.details.whereIsTheProblem}
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">When did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.whenDidItStart"
                          value={this.props.presentingComplaint.skinBreakdown.details.whenDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.howDidItStart"
                          value={this.props.presentingComplaint.skinBreakdown.details.howDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What makes it better?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.whatMakesItBetter"
                          value={this.props.presentingComplaint.skinBreakdown.details.whatMakesItBetter}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.whatMakesItWorse"
                          value={this.props.presentingComplaint.skinBreakdown.details.whatMakesItWorse}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.skinBreakdown.details.howHasItBeenTreated"
                          value={this.props.presentingComplaint.skinBreakdown.details.howHasItBeenTreated}
                        />
                      </div>
                    </div>

                  </div>
                  : null
              }
            </div>



            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.presentingComplaint.swelling.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Swelling</label>
              </div>
              {
                this.props.presentingComplaint.swelling.value ?
                  <div className="col-md-9">

                    <div class="row form-group">
                      <div class="row">
                        <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                      </div>
                      <div class="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.whereIsTheProblem"
                          value={this.props.presentingComplaint.swelling.details.whereIsTheProblem}
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">When did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.whenDidItStart"
                          value={this.props.presentingComplaint.swelling.details.whenDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.howDidItStart"
                          value={this.props.presentingComplaint.swelling.details.howDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What makes it better?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.whatMakesItBetter"
                          value={this.props.presentingComplaint.swelling.details.whatMakesItBetter}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.whatMakesItWorse"
                          value={this.props.presentingComplaint.swelling.details.whatMakesItWorse}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.swelling.details.howHasItBeenTreated"
                          value={this.props.presentingComplaint.swelling.details.howHasItBeenTreated}
                        />
                      </div>
                    </div>

                  </div>
                  : null
              }
            </div>


            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.presentingComplaint.colorChange.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Color Change</label>
              </div>
              {
                this.props.presentingComplaint.colorChange.value ?
                  <div className="col-md-9">

                    <div class="row form-group">
                      <div class="row">
                        <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                      </div>
                      <div class="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.whereIsTheProblem"
                          value={this.props.presentingComplaint.colorChange.details.whereIsTheProblem}
                        />
                      </div>
                    </div>

                    <div class="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">When did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.whenDidItStart"
                          value={this.props.presentingComplaint.colorChange.details.whenDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.howDidItStart"
                          value={this.props.presentingComplaint.colorChange.details.howDidItStart}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What makes it better?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.whatMakesItBetter"
                          value={this.props.presentingComplaint.colorChange.details.whatMakesItBetter}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.whatMakesItWorse"
                          value={this.props.presentingComplaint.colorChange.details.whatMakesItWorse}
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.colorChange.details.howHasItBeenTreated"
                          value={this.props.presentingComplaint.colorChange.details.howHasItBeenTreated}
                        />
                      </div>
                    </div>

                  </div>
                  : null
              }
            </div>


            <div className="row">
              <div className="col-md-3">
                <input checked={this.props.presentingComplaint.pain.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Pain</label>
              </div>
              {
                this.props.presentingComplaint.pain.value ?
                  <div className="col-md-9">

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">When did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          value={this.props.presentingComplaint.pain.details.whenDidItStart}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whenDidItStart"
                        />
                      </div>
                    </div>


                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">How did it start?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.howDidItStart"
                          value={this.props.presentingComplaint.pain.details.howDidItStart}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">Was there an injury?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.wasThereAnInjury"
                          value={this.props.presentingComplaint.pain.details.wasThereAnInjury}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">Where is the pain?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whereIsThePain"
                          value={this.props.presentingComplaint.pain.details.whereIsThePain}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What is its Nature?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whatIsItsNature"
                          value={this.props.presentingComplaint.pain.details.whatIsItsNature}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What aggravates the pain?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whatAggravatesThePain"
                          value={this.props.presentingComplaint.pain.details.whatAggravatesThePain}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">What relieves the pain?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whatRelievesThePain"
                          value={this.props.presentingComplaint.pain.details.whatRelievesThePain}
                        />
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="row">
                        <label htmlFor="ck11" className="white-text">When does it occur?</label>
                      </div>
                      <div className="row">
                        <textarea cols={70} rows={4}
                          onChange={(e) => this.props.onChange(e)}
                          name="history.presentingComplaint.pain.details.whenDoesItOccur"
                          value={this.props.presentingComplaint.pain.details.whenDoesItOccur}
                        />
                      </div>
                    </div>

                  </div>
                  : null
              }
            </div>


            <button className="btn waves-effect waves-red" id="btn21" onClick={(e) => this.props.onSave(e)}>Next</button>
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
