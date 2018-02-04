import React from 'react';
import RadioButtonGroup from './common/RadioButtonGroup';
import CheckBoxGroup from './common/CheckBoxGroup';

class InvestigationsTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showStage: false,
            stage: ""
        };
        this.classChange = this.classChange.bind(this);
        this.stageChange = this.stageChange.bind(this);

    }

    changeTab(tab) {
        this.props.changeTab(tab)
    }

    classList() {
        let diagnosisClass = this.props.diagnosis.class;
        return [
            { label: "Neuropathic foot", checked: diagnosisClass == "neuropathicFoot", value: "neuropathicFoot" },
            { label: "Neuroischemic", checked: diagnosisClass == "neuroischemic", value: "neuroischemic" },
        ]
    }

    stageList() {
        let stage = this.props.diagnosis.stage;
        return [
            { label: "Stage 0: Normal foot", checked: stage == "0", value: "0" },
            { label: "Stage 1: High-risk foot", checked: stage == "1", value: "1" },
            { label: "Stage 2: Ulcerated foot", checked: stage == "2", value: "2" },
            { label: "Stage 3: Infected foot", checked: stage == "3", value: "3" },
            { label: "Stage 4: Necrotic foot", checked: stage == "4", value: "4" },
            { label: "Stage 5: Unsalvageable foot", checked: stage == "5", value: "5" },
        ]
    }

    multidisciplinaryManagementForEachStageList() {
        let multidisciplinaryManagementForEachStage = this.props.diagnosis.multidisciplinaryManagementForEachStage;
        return [
            { label: "Metabolic Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.metabolicControl, name: "diagnosis.multidisciplinaryManagementForEachStage.metabolicControl" },
            { label: "Mechanical Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.mechanicalControl, name: "diagnosis.multidisciplinaryManagementForEachStage.mechanicalControl" },
            { label: "Wound Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.woundControl, name: "diagnosis.multidisciplinaryManagementForEachStage.woundControl" },
            { label: "Vascular Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.vascularControl, name: "diagnosis.multidisciplinaryManagementForEachStage.vascularControl" },
            { label: "Microbiological Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.microbiologicalControl, name: "diagnosis.multidisciplinaryManagementForEachStage.microbiologicalControl" },
            { label: "Educational Control", checked: this.props.diagnosis.multidisciplinaryManagementForEachStage.educationalControl, name: "diagnosis.multidisciplinaryManagementForEachStage.educationalControl" },
        ]
    }

    classChange(e) {
        this.setState({
            showStage: true
        })
        this.props.onChange(e)
    }
    stageChange(e) {
        this.setState({
            stage: e.target.value
        })
        this.props.onChange(e)
    }

    render() {
        let { diagnosis, tab } = this.props;
        const StageDiscription = () => {

            let StageDiv;
            switch (this.state.stage) {
                case "0":
                    StageDiv = <div>
                        Stage0: Normal foot [Annual review with basic foot education]
                </div>
                    break;
                case "1":
                    StageDiv = <div>
                        Stage 1: High-risk foot —It is difficult to stratify the risk of ulceration within this group. Any patient with one or more of the following—neuropathy, ischaemia, deformity, callus, swelling—should be referred for education and podiatry, receiving 3-monthly or more frequent treatment.
                </div>
                    break;
                case "2":
                    StageDiv = <div>
                        Stage 2: Ulcerated foot
All of these components of multidisciplinary management are important in stage3:
• Mechanical control
• Wound control
• Vascular control
• Microbiological control
• Metabolic control
• Educational control.
The aim is to heal ulcers within the first 6 weeks of their
development.
                </div>
                    break;
                case "3":
                    StageDiv = <div>
                        Stage 3: Infected foot
All of these components of multidisciplinary management are important in stage4:
• Mechanical control
• Wound control
• Vascular control
• Microbiological control
• Metabolic control
• Educational control
                </div>
                    break;
                case "4":
                    StageDiv = <div>
                        Stage 4: Necrotic foot
All of these components of multidisciplinary management are important in stage3:
• Mechanical control
• Wound control
• Vascular control
• Microbiological control
• Metabolic control
• Educational control.
	Techniques to treat necrosis
• Outpatient debridement
• Operative surgical debridement
• Facilitated autoamputation
• Larva therapy.
                </div>
                    break;
                case "5":
                    StageDiv = <div>
                        Stage 5: Unsalvageable foot.
Rehabilitation
The key for success in dealing with the stage 6 patient is
careful follow-up. With good planning and follow-up
care after a major amputation, the stump will heal but it is
also important to ensure that it will remain intact.Healthcare professionals in the diabetic foot service should be
aware of the presentation and management of problems
with the amputated stump .
                </div>
                    break;
            }
            return StageDiv;
        }
        return (
            <div className=" " id="tab2" >
                <div className="row">
                    <div className="col s12">
                        <div className=" " id="tab1">
                            <div className="container">
                                <div className="row">
                                    <RadioButtonGroup name="diagnosis.class" title="Class" list={this.classList()} onChange={this.classChange} />
                                    {
                                        this.state.showStage ?
                                            <div>
                                                <RadioButtonGroup name="diagnosis.stage" title="Stage" list={this.stageList()} onChange={this.stageChange} />
                                                {
                                                    this.state.stage ?
                                                        < StageDiscription />
                                                        : null
                                                }
                                            </div>
                                            : null
                                    }
                                    <CheckBoxGroup title="Multidisciplinary management for each stage" list={this.multidisciplinaryManagementForEachStageList()} onChange={this.props.onChange} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InvestigationsTab