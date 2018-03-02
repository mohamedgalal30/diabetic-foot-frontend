import React from 'react';
import RadioButtonGroup from '../common/RadioButtonGroup';
import CheckBox from '../common/CheckBox';

class DHistTab extends React.Component {

	typeOfDiabetesList() {
		let typeOfDiabetes = this.props.diabeticHistory.typeOfDiabetes;
		return [
			{ label: "Type1", checked: typeOfDiabetes == "type1", value: "type1" },
			{ label: "Type2", checked: typeOfDiabetes == "type2", value: "type2" },
		]
	}

	durationOfDiabetesList() {
		let durationOfDiabetes = this.props.diabeticHistory.durationOfDiabetes.value;
		return [
			{ label: "Discover", checked: durationOfDiabetes == "discover", value: "discover" },
			{ label: "Treatment", checked: durationOfDiabetes == "treatment", value: "treatment" },
		]
	}

	treatmentOfDiabetesList() {
		let treatmentOfDiabetes = this.props.diabeticHistory.treatmentOfDiabetes.value;
		return [
			{ label: "Insulin", checked: treatmentOfDiabetes == "insulin", value: "insulin" },
			{ label: "Oral Hypoglycemic", checked: treatmentOfDiabetes == "oralHypoglycemic", value: "oralHypoglycemic" },
		]
	}

	render() {
		let { onChange } = this.props;
		return (
			<div className="row">
				<div className="row">
					<RadioButtonGroup name="history.diabeticHistory.typeOfDiabetes" title="Type Of Diabetes" list={this.typeOfDiabetesList()} onChange={(e) => onChange(e)} />
				</div>

				<div className="row">
					<RadioButtonGroup name="history.diabeticHistory.durationOfDiabetes.value" title="Duration Of Diabetes" list={this.durationOfDiabetesList()} onChange={(e) => onChange(e)} />
				</div>

				<div className="col-md-9 col-md-offset-2">
					<div className="row form-group">
						<div className="row">
							<label className="white-text">Details</label>
						</div>
						<div className="row">
							<textarea cols={70} rows={4}
								onChange={(e) => this.props.onChange(e)}
								name="history.diabeticHistory.durationOfDiabetes.details"
								value={this.props.diabeticHistory.durationOfDiabetes.details}
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<RadioButtonGroup name="history.diabeticHistory.treatmentOfDiabetes.value" title="Treatment Of Diabetes" list={this.treatmentOfDiabetesList()} onChange={(e) => onChange(e)} />
				</div>

				<div className="col-md-9 col-md-offset-2">
					<div className="row form-group">
						<div className="row">
							<label className="white-text">Details</label>
						</div>
						<div className="row">
							<textarea cols={70} rows={4}
								onChange={(e) => this.props.onChange(e)}
								name="history.diabeticHistory.treatmentOfDiabetes.details"
								value={this.props.diabeticHistory.treatmentOfDiabetes.details}
							/>
						</div>
					</div>

				</div>

				<div className="row">
					<div className="col-md-3">
						<label className="white-text">Complications Of Diabetes</label>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-3">
								<label className="white-text">Retinopathy</label>
								<input checked={this.props.diabeticHistory.complicationsOfDiabetes.retinopathy} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.retinopathy" type="checkbox" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<label className="white-text">Nephropathy</label>
								<input checked={this.props.diabeticHistory.complicationsOfDiabetes.nephropathy} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.nephropathy" type="checkbox" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<label className="white-text">Cardiovascular</label>
								<input checked={this.props.diabeticHistory.complicationsOfDiabetes.cardiovascular} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.cardiovascular" type="checkbox" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<label className="white-text">Cerebrovascular</label>
								<input checked={this.props.diabeticHistory.complicationsOfDiabetes.cerebrovascular} onChange={(e) => this.props.onChange(e)} name="history.diabeticHistory.complicationsOfDiabetes.cerebrovascular" type="checkbox" />
							</div>
						</div>
					</div>
				</div>

			</div >
		);
	}
}

export default DHistTab;
