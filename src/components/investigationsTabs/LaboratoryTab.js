import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class LaboratoryTab extends React.Component {

	render() {
		return (
			<div className="row">

				<div className="row form-group">
					<div className="row">
						<label className="white-text">Full blood count</label>
					</div>
					<div className="row">
						<input type="text"
							onChange={(e) => this.props.onChange(e)}
							name="investigations.laboratory.fullBloodCount"
							value={this.props.laboratory.fullBloodCount}
						/>
					</div>
				</div>
				<div className="row form-group">
					<div className="row">
						<label className="white-text">Serum electrolytes, urea and creatinine</label>
					</div>
					<div className="row">
						<input type="text"
							onChange={(e) => this.props.onChange(e)}
							name="investigations.laboratory.serumElectrolytesUreaAndCreatinine"
							value={this.props.laboratory.serumElectrolytesUreaAndCreatinine}
						/>
					</div>
				</div>
				<div className="row form-group">
					<div className="row">
						<label className="white-text">Blood glucose and HbAlc</label>
					</div>
					<div className="row">
						<input type="text"
							onChange={(e) => this.props.onChange(e)}
							name="investigations.laboratory.bloodGlucoseAndHbAlc"
							value={this.props.laboratory.bloodGlucoseAndHbAlc}
						/>
					</div>
				</div>
				<div className="row form-group">
					<div className="row">
						<label className="white-text">Serum bilirubin, alkaline phosphatase, gamma glutamyl transferase, aspartate transaminase</label>
					</div>
					<div className="row">
						<input type="text"
							onChange={(e) => this.props.onChange(e)}
							name="investigations.laboratory.serumBilirubinAlkalinePhosphatase"
							value={this.props.laboratory.serumBilirubinAlkalinePhosphatase}
						/>
					</div>
				</div>
				<div className="row form-group">
					<div className="row">
						<label className="white-text">Serum cholesterol and triglycerides</label>
					</div>
					<div className="row">
						<input type="text"
							onChange={(e) => this.props.onChange(e)}
							name="investigations.laboratory.serumCholesterolAndTriglycerides"
							value={this.props.laboratory.serumCholesterolAndTriglycerides}
						/>
					</div>
				</div>

			</div>
		);
	}
}

// LaboratoryTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default LaboratoryTab;
