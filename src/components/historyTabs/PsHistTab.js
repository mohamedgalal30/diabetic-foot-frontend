import React from 'react';
import TextInput from '../common/TextInput';
import RadioButtonGroup from '../common/RadioButtonGroup';

class PsHist extends React.Component {

	livesWithList() {
		let livesWith = this.props.psychosocialHistory.livesWith;
		return [
			{ label: "Alone", checked: livesWith == "alone", value: "alone" },
			{ label: "Friends or Relative", checked: livesWith == "friendsOrRelative", value: "friendsOrRelative" },
		]
	}

	render() {
		return (
			<div className="row">

				<div className="col-md-12">
					<TextInput id="occupation" label="Occupation" value={this.props.psychosocialHistory.occupation} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.occupation" />
				</div>

				<div className="col-md-12">
					<TextInput id="number-of-igarettes" label="Number Of Cigarettes" type="number" value={this.props.psychosocialHistory.numberOfCigarettes} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.numberOfCigarettes" />
				</div>

				<div className="col-md-12">
					<TextInput id="number-of-units-of-alcohol" label="Number Of Units Of Alcohol" type="number" value={this.props.psychosocialHistory.numberOfUnitsOfAlcohol} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.numberOfUnitsOfAlcohol" />
				</div>

				<div className="col-md-12">
					<TextInput id="psychiatric-illness" label="Psychiatric Illness" value={this.props.psychosocialHistory.psychiatricIllness} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.psychiatricIllness" />
				</div>

				<div className="col-md-12">
					<TextInput id="home-circumstances" label="Home Circumstances" value={this.props.psychosocialHistory.homeCircumstances} onChange={(e) => this.props.onChange(e)} name="history.psychosocialHistory.homeCircumstances" />
				</div>

				<div className="col-md-12">
					<RadioButtonGroup name="history.psychosocialHistory.livesWith" title="Lives With" list={this.livesWithList()} onChange={(e) => this.props.onChange(e)} />
				</div>

			</div>
		);
	}
}

export default PsHist;
