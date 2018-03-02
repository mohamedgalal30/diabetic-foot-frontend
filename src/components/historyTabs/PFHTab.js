import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
import CheckBox from '../common/CheckBox';

class PFHTab extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="row col-md-12">
					<div className="col-md-5">
						<CheckBox id="past-foot-history" title="Past Foot History" checked={this.props.pastFootHistory.previousUlcersAndTreatment} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.previousUlcersAndTreatment" />
					</div>
				</div>



				<div className="row col-md-12">
					<div className="col-md-5">
						<CheckBox id="amputations" title="Amputations" checked={this.props.pastFootHistory.amputations.value} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.amputations.value" />
					</div>
					<div className="col-md-7">

						{
							this.props.pastFootHistory.amputations.value ?
								<div className="">

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
				</div>


				<div className="row col-md-12">
					<div className="col-md-5">
						<CheckBox id="peripheral-angioplasties" title="Peripheral Angioplasties" checked={this.props.pastFootHistory.peripheralAngioplasties} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.peripheralAngioplasties" />
					</div>
				</div>


				<div className="row col-md-12">
					<div className="col-md-5">
						<CheckBox id="peripheral-arterial-bypasses" title="Peripheral Arterial Bypasses" checked={this.props.pastFootHistory.peripheralArterialBypasses} onChange={(e) => this.props.onChange(e)} name="history.pastFootHistory.peripheralArterialBypasses" />
					</div>
				</div>

			</div>
		);
	}
}

// PFHTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PFHTab;
