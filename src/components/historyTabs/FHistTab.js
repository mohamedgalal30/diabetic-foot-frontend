import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from './common/TextInput';
import CheckBox from '../common/CheckBox';

class FHistTab extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="row col-md-12">
					<div className="col-md-4">
						<CheckBox id="diabetes" title="Diabetes" checked={this.props.familyHistory.diabetes} onChange={(e) => this.props.onChange(e)} name="history.familyHistory.diabetes" />
					</div>
				</div>

				<div className="row col-md-12">
					<div className="col-md-3">
						<label className="white-text">Other Serious Illness</label>
					</div>
					<div className="col-md-9">
						<textarea cols={60} rows={4}
							onChange={(e) => this.props.onChange(e)}
							name="history.familyHistory.otherSeriousIllness"
							value={this.props.familyHistory.otherSeriousIllness}
						/>
					</div>
				</div>
				<div className="row col-md-12">
					<div className="col-md-3">
						<label className="white-text">cause Of Death Of Near Relatives</label>
					</div>
					<div className="col-md-9">
						<textarea cols={60} rows={4}
							onChange={(e) => this.props.onChange(e)}
							name="history.familyHistory.causeOfDeathOfNearRelatives"
							value={this.props.familyHistory.causeOfDeathOfNearRelatives}
						/>
					</div>
				</div>

			</div>
		);
	}
}

// FHistTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default FHistTab;
