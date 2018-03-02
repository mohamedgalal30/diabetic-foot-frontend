import React from 'react';
import TextInput from '../common/TextInput';
import CheckBoxGroup from '../common/CheckBoxGroup';
import CheckBox from '../common/CheckBox';
import RadioButtonGroup from '../common/RadioButtonGroup';

class InspectionTab extends React.Component {
	skinList() {
		let skin = this.props.inespection.skin;
		return [
			{ label: "dry and fissured", checked: this.props.inespection.skin.dryAndFissured, name: "examination.inespection.skin.dryAndFissured" },
			{ label: "dilated veins, Hair loss", checked: this.props.inespection.skin.dilatedVeinsHairLoss, name: "examination.inespection.skin.dilatedVeinsHairLoss" },
			{ label: "Atrophy of the subcutaneous", checked: this.props.inespection.skin.atrophyOfTheSubcutaneous, name: "examination.inespection.skin.atrophyOfTheSubcutaneous" },
			{ label: "wrinkled skin", checked: this.props.inespection.skin.wrinkledSkin, name: "examination.inespection.skin.wrinkledSkin" },
			{ label: "foot ulcer", checked: this.props.inespection.skin.footUlcer, name: "examination.inespection.skin.footUlcer" },
			{ label: "Abrasions", checked: this.props.inespection.skin.abrasions, name: "examination.inespection.skin.abrasions" },
			{ label: "bullae and fissures", checked: this.props.inespection.skin.bullaeAndFissures, name: "examination.inespection.skin.bullaeAndFissures" }
		]
	}
	nailsList() {
		let nails = this.props.inespection.nails;
		return [
			{ label: "Structure", checked: this.props.inespection.nails.structure, name: "examination.inespection.nails.structure" },
			{ label: "Abnormalities under nail", checked: this.props.inespection.nails.abnormalitiesUnderNail, name: "examination.inespection.nails.abnormalitiesUnderNail" },
			{ label: "Signs of infections", checked: this.props.inespection.nails.signsOfInfections, name: "examination.inespection.nails.signsOfInfections" },
		]
	}
	swellingList() {
		let swelling = this.props.inespection.swelling;
		return [
			{ label: "bilateral foot swelling", checked: swelling == "bilateralFootSwelling", value: "bilateralFootSwelling" },
			{ label: "unilateral foot", checked: swelling == "unilateralFoot", value: "unilateralFoot" },
			{ label: "toe", checked: swelling == "toe", value: "toe" },
		]
	}
	deformityList() {
		let deformity = this.props.inespection.deformity;
		return [
			{ label: "Pescavus", checked: this.props.inespection.deformity.Pescavus, name: "examination.inespection.deformity.pescavus" },
			{ label: "FFPD", checked: this.props.inespection.deformity.ffpd, name: "examination.inespection.deformity.ffpd" },
			{ label: "Hammer toes", checked: this.props.inespection.deformity.hammerToes, name: "examination.inespection.deformity.hammerToes" },
			{ label: "Claw toes", checked: this.props.inespection.deformity.clawToes, name: "examination.inespection.deformity.clawToes" },
			{ label: "Hallux valgus", checked: this.props.inespection.deformity.halluxValgus, name: "examination.inespection.deformity.halluxValgus" },
			{ label: "Charcot foot", checked: this.props.inespection.deformity.charcotFoot, name: "examination.inespection.deformity.charcotFoot" },
			{ label: "previous trauma", checked: this.props.inespection.deformity.previousTrauma, name: "examination.inespection.deformity.previousTrauma" },
		]
	}
	colorList() {
		let color = this.props.inespection.color;
		return [
			{ label: "red foot", checked: this.props.inespection.color.redFoot, name: "examination.inespection.color.redFoot" },
			{ label: "blue foot", checked: this.props.inespection.color.blueFoot, name: "examination.inespection.color.blueFoot" },
			{ label: "red toe", checked: this.props.inespection.color.redToe, name: "examination.inespection.color.redToe" },
			{ label: "blue toe", checked: this.props.inespection.color.blueToe, name: "examination.inespection.color.blueToe" },
			{ label: "a pale white", checked: this.props.inespection.color.paleWhite, name: "examination.inespection.color.paleWhite" },
			{ label: "black", checked: this.props.inespection.color.black, name: "examination.inespection.color.black" },
		]
	}

	necrosisList() {
		let color = this.props.inespection.color;
		return [
			{ label: "black or brown devitalized tissue", checked: this.props.inespection.color.blackOrBrownDevitalizedTissue, name: "examination.inespection.color.blackOrBrownDevitalizedTissue" },
			{ label: "wet or dry", checked: this.props.inespection.color.wetOrDry, name: "examination.inespection.color.wetOrDry" },
		]
	}

	render() {
		let { onChange, inespection } = this.props;
		return (
			<div className="row">
				<div className="col-md-12">
					<CheckBoxGroup title="Skin" list={this.skinList()} onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<TextInput id="callus"
						label="Callus"
						type="number"
						min={1}
						max={10}
						name="examination.inespection.callus"
						value={this.props.inespection.callus}
						onChange={this.props.onChange}
					/>
				</div>

				<div className="col-md-12">
					<CheckBoxGroup title="Nails" list={this.nailsList()} onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<RadioButtonGroup name="examination.inespection.swelling" title="Swelling" list={this.swellingList()} onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<CheckBoxGroup title="Deformity" list={this.deformityList()} onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<CheckBox title="Limited joint mobility" checked={this.props.inespection.limitedJointMobility} name="examination.inespection.limitedJointMobility" onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<CheckBoxGroup title="Color" list={this.colorList()} onChange={this.props.onChange} />
				</div>

				<div className="col-md-12">
					<CheckBoxGroup title="Necrosis" list={this.necrosisList()} onChange={this.props.onChange} />
				</div>

			</div >
		);
	}
}

export default InspectionTab;
