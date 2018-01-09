import React from 'react';
// import PropTypes from 'prop-types';
// import TextInput from '../common/TextInput';
import CheckBoxGroup from '../common/CheckBoxGroup';
import CheckBox from '../common/CheckBox';
import RadioButtonGroup from '../common/RadioButtonGroup';

class NeurologicalAssessmentTab extends React.Component {
  monofilamentIsAt5siteList() {
    let monofilamentIsAt5site = this.props.neurologicalAssessment.monofilamentIsAt5site;
    return [
      { label: "all", checked: this.props.neurologicalAssessment.monofilamentIsAt5site.all, name: "examination.neurologicalAssessment.monofilamentIsAt5site.all" },
      { label: "some", checked: this.props.neurologicalAssessment.monofilamentIsAt5site.some, name: "examination.neurologicalAssessment.monofilamentIsAt5site.some" },
      { label: "no", checked: this.props.neurologicalAssessment.monofilamentIsAt5site.no, name: "examination.neurologicalAssessment.monofilamentIsAt5site.no" },
    ]
  }
  cottonWispList() {
    let cottonWisp = this.props.neurologicalAssessment.cottonWisp;
    return [
      { label: "all", checked: this.props.neurologicalAssessment.cottonWisp.all, name: "examination.neurologicalAssessment.cottonWisp.all" },
      { label: "some", checked: this.props.neurologicalAssessment.cottonWisp.some, name: "examination.neurologicalAssessment.cottonWisp.some" },
      { label: "no", checked: this.props.neurologicalAssessment.cottonWisp.no, name: "examination.neurologicalAssessment.cottonWisp.no" },
    ]
  }

  footwearAssessmentList() {
    let footwearAssessment = this.props.neurologicalAssessment.footwearAssessment;
    return [
      { label: "suitable", checked: footwearAssessment == "suitable", value: "suitable" },
      { label: "unsuitable", checked: footwearAssessment == "unsuitable", value: "unsuitable" },
    ]
  }

  generalExaminationEyeList() {
    let footwearAssessment = this.props.neurologicalAssessment.footwearAssessment;
    return [
      { label: "Visual acuity", checked: footwearAssessment == "visualAcuity", value: "visualAcuity" },
      { label: "Fundi", checked: footwearAssessment == "fundi", value: "fundi" },
    ]
  }
  generalExaminationList() {
    let generalExamination = this.props.neurologicalAssessment.generalExamination;
    return [
      { label: "Cardiovascular", checked: this.props.neurologicalAssessment.generalExamination.cardiovascular, name: "examination.neurologicalAssessment.generalExamination.cardiovascular" },
      { label: "Respiratory", checked: this.props.neurologicalAssessment.generalExamination.respiratory, name: "examination.neurologicalAssessment.generalExamination.respiratory" },
      { label: "Abdomen", checked: this.props.neurologicalAssessment.generalExamination.abdomen, name: "examination.neurologicalAssessment.generalExamination.abdomen" },
    ]
  }

  render() {
    let { onChange, neurologicalAssessment } = this.props;
    return (
      <div id="test1" className="col s12" >
        <div className="container">
          <CheckBoxGroup title="A monofilament is  at 5 site" list={this.monofilamentIsAt5siteList()} onChange={this.props.onChange} />
          <CheckBox title="Achilles tendon pinch" checked={this.props.neurologicalAssessment.achillesTendonPinch} name="examination.neurologicalAssessment.achillesTendonPinch" onChange={this.props.onChange} />
          <CheckBoxGroup title="Cotton Wisp" list={this.cottonWispList()} onChange={this.props.onChange} />
          <CheckBox title="ibration using a 128-Hz tuning fork" checked={this.props.neurologicalAssessment.ibrationUsing128HzTuningFork} name="examination.neurologicalAssessment.ibrationUsing128HzTuningFork" onChange={this.props.onChange} />
          <RadioButtonGroup name="examination.neurologicalAssessment.footwearAssessment" title="Footwear assessment" list={this.footwearAssessmentList()} onChange={this.props.onChange} />
          <div className="row">
            <CheckBoxGroup title="General Examination" list={this.generalExaminationList()} onChange={this.props.onChange} />
            <RadioButtonGroup name="examination.neurologicalAssessment.generalExamination.eyes" title="Eyes" list={this.generalExaminationEyeList()} onChange={this.props.onChange} />
        </div>
        </div>
      </div>
    );
  }
}

// NeurologicalAssessmentTab.propTypes = {
//   patient: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   // saving: PropTypes.bool
// };

export default NeurologicalAssessmentTab;
