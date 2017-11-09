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
              <div className="col-md-4">
                <input checked={this.props.presentingComplaint.skinBreakdown.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Skin Breakdown</label>
              </div>
              {
                this.props.presentingComplaint.skinBreakdown.value ?
                  <div className="col-md-8">

                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.whereIsTheProblem">
                        {this.props.presentingComplaint.skinBreakdown.details.whereIsTheProblem}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.whenDidItStart">
                        {this.props.presentingComplaint.skinBreakdown.details.whenDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">When did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.howDidItStart">
                        {this.props.presentingComplaint.skinBreakdown.details.howDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.whatMakesItBetter">
                        {this.props.presentingComplaint.skinBreakdown.details.whatMakesItBetter}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">What makes it better?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.whatMakesItWorse">
                        {this.props.presentingComplaint.skinBreakdown.details.whatMakesItWorse}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.details.howHasItBeenTreated">
                        {this.props.presentingComplaint.skinBreakdown.details.howHasItBeenTreated}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                    </div>

                  </div>
                  : null
              }
            </div>



            <div className="row">
              <div className="col-md-4">
                <input checked={this.props.presentingComplaint.swelling.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Swelling</label>
              </div>
              {
                this.props.presentingComplaint.swelling.value ?
                  <div className="col-md-8">

                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.whereIsTheProblem">
                        {this.props.presentingComplaint.swelling.details.whereIsTheProblem}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.whenDidItStart">
                        {this.props.presentingComplaint.swelling.details.whenDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">When did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.howDidItStart">
                        {this.props.presentingComplaint.swelling.details.howDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.whatMakesItBetter">
                        {this.props.presentingComplaint.swelling.details.whatMakesItBetter}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">What makes it better?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.whatMakesItWorse">
                        {this.props.presentingComplaint.swelling.details.whatMakesItWorse}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.details.howHasItBeenTreated">
                        {this.props.presentingComplaint.swelling.details.howHasItBeenTreated}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                    </div>

                  </div>
                  : null
              }
            </div>


            <div className="row">
              <div className="col-md-4">
                <input checked={this.props.presentingComplaint.colorChange.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Color Change</label>
              </div>
              {
                this.props.presentingComplaint.colorChange.value ?
                  <div className="col-md-8">

                    <div className="row">
                      <textarea value={this.props.presentingComplaint.colorChange.details.whereIsTheProblem} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.whereIsTheProblem" />
                      <label htmlFor="ck11" className="white-text">Where is the Problem?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.whenDidItStart">
                        {this.props.presentingComplaint.colorChange.details.whenDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">When did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.howDidItStart">
                        {this.props.presentingComplaint.colorChange.details.howDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.whatMakesItBetter">
                        {this.props.presentingComplaint.colorChange.details.whatMakesItBetter}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">What makes it better?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.whatMakesItWorse">
                        {this.props.presentingComplaint.colorChange.details.whatMakesItWorse}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">what makes it worse?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.details.howHasItBeenTreated">
                        {this.props.presentingComplaint.colorChange.details.howHasItBeenTreated}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">how has it been treated?</label>
                    </div>

                  </div>
                  : null
              }
            </div>


            <div className="row">
              <div className="col-md-4">
                <input checked={this.props.presentingComplaint.pain.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.value" type="checkbox" />
                <label htmlFor="ck11" className="white-text">Pain</label>
              </div>
              {
                this.props.presentingComplaint.pain.value ?
                  <div className="col-md-8">

                    <div className="row">
                      <textarea value={this.props.presentingComplaint.pain.details.whenDidItStart} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whenDidItStart" />
                      <label htmlFor="ck11" className="white-text">When did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.howDidItStart">
                        {this.props.presentingComplaint.pain.details.howDidItStart}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">How did it start?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.wasThereAnInjury">
                        {this.props.presentingComplaint.pain.details.wasThereAnInjury}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">Was there an injury?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whereIsThePain">
                        {this.props.presentingComplaint.pain.details.whereIsThePain}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">Where is the pain?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whatIsItsNature">
                        {this.props.presentingComplaint.pain.details.whatIsItsNature}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">What is its Nature?</label>
                    </div>


                    <div className="row">
                    <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whatAggravatesThePain">
                      {this.props.presentingComplaint.pain.details.whatAggravatesThePain}
                    </textarea>
                    <label htmlFor="ck11" className="white-text">What aggravates the pain?</label>
                  </div>


                  <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whatRelievesThePain">
                        {this.props.presentingComplaint.pain.details.whatRelievesThePain}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">What relieves the pain?</label>
                    </div>


                    <div className="row">
                      <textarea onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.details.whenDoesItOccur">
                        {this.props.presentingComplaint.pain.details.whenDoesItOccur}
                      </textarea>
                      <label htmlFor="ck11" className="white-text">When does it occur?</label>
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
