import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
import CheckBox from '../common/CheckBox';

class PMHTAB extends React.Component {
	render() {
		return (
			<div className="row">

				<div className="row col-md-12">
					<label className="white-text">Past Medical History</label>
				</div>

				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="serious-illness" title="Serious Illness" checked={this.props.pastMedicalHistory.seriousIllness} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.seriousIllness" />
					</div>
				</div>

				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="accidents" title="Accidents" checked={this.props.pastMedicalHistory.accidents} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.accidents" />
					</div>
				</div>

				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="injuries" title="Injuries" checked={this.props.pastMedicalHistory.injuries} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.injuries" />
					</div>
				</div>

				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="hospital-admissions" title="Hospital Admissions" checked={this.props.pastMedicalHistory.hospitalAdmissions} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.hospitalAdmissions" />
					</div>
				</div>

				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="operations" title="Operations" checked={this.props.pastMedicalHistory.operations} onChange={(e) => this.props.onChange(e)} name="history.pastMedicalHistory.operations" />
					</div>
				</div>

			</div>
		);
	}
}

// PMHTAB.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default PMHTAB;
