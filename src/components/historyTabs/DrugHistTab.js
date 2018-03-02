import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class DrugHist extends React.Component {

	render() {
		return (
			<div className="row col-md-12">

				<div className="row col-md-12">
					<div className="col-md-2">
						<label className="white-text">Present Medication</label>
					</div>
					<div className="col-md-10">
						<textarea cols={60} rows={4}
							onChange={(e) => this.props.onChange(e)}
							name="history.drugHistory.presentMedication"
							value={this.props.drugHistory.presentMedication}
						/>
					</div>
				</div>
				
				<div className="row col-md-12 form-group">
					<div className="col-md-2">
						<label className="white-text">Known Allergies</label>
					</div>
					<div className="col-md-10">
						<textarea cols={60} rows={4}
							onChange={(e) => this.props.onChange(e)}
							name="history.drugHistory.knownAllergies"
							value={this.props.drugHistory.knownAllergies}
						/>
					</div>
				</div>

			</div>
		);
	}
}

// DrugHist.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default DrugHist;
