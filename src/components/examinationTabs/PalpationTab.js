import React from 'react';
import CheckBoxGroup from '../common/CheckBoxGroup';
import CheckBox from '../common/CheckBox';
import RadioButtonGroup from '../common/RadioButtonGroup';

class PalpationTab extends React.Component {

	pulsesDorsalisPedisList() {
		let pulses = this.props.palpation.pulses;
		return [
			{ label: "palpated", checked: pulses.dorsalisPedis == "palpated", value: "palpated" },
			{ label: "not palpated", checked: pulses.dorsalisPedis == "notPalpated", value: "notPalpated" },
		]
	}
	pulsesPosteriorTibialList() {
		let pulses = this.props.palpation.pulses;
		return [
			{ label: "palpated", checked: pulses.posteriorTibial == "palpated", value: "palpated" },
			{ label: "not palpated", checked: pulses.posteriorTibial == "notPalpated", value: "notPalpated" },
		]
	}
	temperatureList() {
		let temperature = this.props.palpation.temperature;
		return [
			{ label: "red foot", checked: this.props.palpation.temperature.redFoot, name: "examination.palpation.temperature.redFoot" },
			{ label: "blue foot", checked: this.props.palpation.temperature.blueFoot, name: "examination.palpation.temperature.blueFoot" },
			{ label: "red toe", checked: this.props.palpation.temperature.redToe, name: "examination.palpation.temperature.redToe" },
			{ label: "blue toe", checked: this.props.palpation.temperature.blueToe, name: "examination.palpation.temperature.blueToe" },
			{ label: "a pale white", checked: this.props.palpation.temperature.paleWhite, name: "examination.palpation.temperature.paleWhite" },
			{ label: "black", checked: this.props.palpation.temperature.black, name: "examination.palpation.temperature.black" },
		]
	}


	render() {
		let { onChange, palpation } = this.props;
		return (
			<div className="row">
				<div className="row">
					<div className="row">
						<label className="white-text">Pulses</label>
					</div>
					<div className="col-md-offset-1">
						<RadioButtonGroup name="examination.palpation.pulses.dorsalisPedis" title="Dorsalis Pedis" list={this.pulsesDorsalisPedisList()} onChange={this.props.onChange} />
						<RadioButtonGroup name="examination.palpation.pulses.posteriorTibial" title="Posterior Tibial" list={this.pulsesPosteriorTibialList()} onChange={this.props.onChange} />
					</div>
				</div>
				<div className="row">
					<CheckBoxGroup title="Temperature" list={this.temperatureList()} onChange={this.props.onChange} />
				</div>
				<div className="row">
					<CheckBox title="Oedema" checked={this.props.palpation.oedema} name="examination.palpation.oedema" onChange={this.props.onChange} />
				</div>
				<div className="row">
					<CheckBox title="Crepitus" checked={this.props.palpation.crepitus} name="examination.palpation.crepitus" onChange={this.props.onChange} />
				</div>
			</div>
		);
	}
}

export default PalpationTab;
