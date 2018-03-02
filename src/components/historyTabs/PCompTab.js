import React from 'react';
import CheckBox from '../common/CheckBox';

// import PropTypes from 'prop-types';

class PCompTab extends React.Component {

	render() {
		return (
			<div className="row">
				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="skin-breakdown" title="Skin Breakdown" checked={this.props.presentingComplaint.skinBreakdown.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.skinBreakdown.value" />
					</div>
					<div className="col-md-8">
						{
							this.props.presentingComplaint.skinBreakdown.value ?

								<div className="">
									<div className="row form-group">
										<div className="row">
											<label className="white-text">Where is the Problem?</label>
										</div>
										<div className="row">
											<textarea cols={70} rows={4}
												onChange={(e) => this.props.onChange(e)}
												name="history.presentingComplaint.skinBreakdown.details.whereIsTheProblem"
												value={this.props.presentingComplaint.skinBreakdown.details.whereIsTheProblem}
											/>
										</div>
									</div>

									<div className="row form-group">
										<div className="row">
											<label className="white-text">When did it start?</label>
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
											<label className="white-text">how did it start?</label>
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
											<label className="white-text">What makes it better?</label>
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
											<label className="white-text">what makes it worse?</label>
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
											<label className="white-text">how has it been treated?</label>
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
				</div>



				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="swelling" title="Swelling" checked={this.props.presentingComplaint.swelling.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.swelling.value" />
					</div>
					<div className="col-md-8">

						{
							this.props.presentingComplaint.swelling.value ?
								<div className="">

									<div className="row form-group">
										<div className="row">
											<label className="white-text">Where is the Problem?</label>
										</div>
										<div className="row">
											<textarea cols={70} rows={4}
												onChange={(e) => this.props.onChange(e)}
												name="history.presentingComplaint.swelling.details.whereIsTheProblem"
												value={this.props.presentingComplaint.swelling.details.whereIsTheProblem}
											/>
										</div>
									</div>

									<div className="row form-group">
										<div className="row">
											<label className="white-text">When did it start?</label>
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
											<label className="white-text">how did it start?</label>
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
											<label className="white-text">What makes it better?</label>
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
											<label className="white-text">what makes it worse?</label>
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
											<label className="white-text">how has it been treated?</label>
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
				</div>


				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="color-change" title="Color Change" checked={this.props.presentingComplaint.colorChange.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.colorChange.value" />
					</div>
					<div className="col-md-8">

						{
							this.props.presentingComplaint.colorChange.value ?
								<div className="">

									<div className="row form-group">
										<div className="row">
											<label className="white-text">Where is the Problem?</label>
										</div>
										<div className="row">
											<textarea cols={70} rows={4}
												onChange={(e) => this.props.onChange(e)}
												name="history.presentingComplaint.colorChange.details.whereIsTheProblem"
												value={this.props.presentingComplaint.colorChange.details.whereIsTheProblem}
											/>
										</div>
									</div>

									<div className="row form-group">
										<div className="row">
											<label className="white-text">When did it start?</label>
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
											<label className="white-text">how did it start?</label>
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
											<label className="white-text">What makes it better?</label>
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
											<label className="white-text">what makes it worse?</label>
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
											<label className="white-text">how has it been treated?</label>
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
				</div>


				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="pain" title="Pain" checked={this.props.presentingComplaint.pain.value} onChange={(e) => this.props.onChange(e)} name="history.presentingComplaint.pain.value" />
					</div>
					<div className="col-md-12">
						{
							this.props.presentingComplaint.pain.value ?
								<div className="">

									<div className="row form-group">
										<div className="row">
											<label className="white-text">When did it start?</label>
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
											<label className="white-text">How did it start?</label>
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
											<label className="white-text">Was there an injury?</label>
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
											<label className="white-text">Where is the pain?</label>
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
											<label className="white-text">What is its Nature?</label>
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
											<label className="white-text">What aggravates the pain?</label>
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
											<label className="white-text">What relieves the pain?</label>
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
											<label className="white-text">When does it occur?</label>
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
				</div>

			</div>
		);
	}
}

// PCompTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PCompTab;
