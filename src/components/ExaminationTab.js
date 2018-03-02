import React from 'react';
import InspectionTab from './examinationTabs/InspectionTab'
import PalpationTab from './examinationTabs/PalpationTab'
import NeurologicalAssessmentTab from './examinationTabs/NeurologicalAssessmentTab'
const TABS = {
    Inspection: 9,
    Palpation: 10,
    NeurologicalAssessment: 11,
}

class ExaminationTab extends React.Component {

    changeTab(tab) {
        this.props.changeTab(tab)
    }


    render() {
        let x = this.props
        let {
            inespection,
            palpation,
            neurologicalAssessment,
        } = this.props.examination;
        let tab = this.props.tab;
        let TabContent;
        switch (tab) {
            case TABS.Inspection:
                TabContent = <InspectionTab inespection={inespection} onChange={this.props.onChange} />
                break;
            case TABS.Palpation:
                TabContent = <PalpationTab palpation={palpation} onChange={this.props.onChange} />
                break;
            case TABS.NeurologicalAssessment:
                TabContent = <NeurologicalAssessmentTab neurologicalAssessment={neurologicalAssessment} onChange={this.props.onChange} />
                break;

        }


        return (
            <div className="row">
                <div className="col s12">
                    <ul className="nav nav-tabs" id="Slist">
                        <li onClick={this.changeTab.bind(this, TABS.Inspection)} className={`tab col s4 ${tab == 9 ? 'active' : ""}`}><a  title="Inspection">Inspection</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.Palpation)} className={`tab col s4 ${tab == 10 ? 'active' : ""}`}><a  title="Past Foot History" >Palpation</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.NeurologicalAssessment)} className={`tab col s4 ${tab == 11 ? 'active' : ""}`}><a title="NeurologicalAssessment">NeurologicalAssessment</a></li>
                    </ul>
                    <div className=" ">
                        <div className="container">
                            <div className="row">
                                {TabContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ExaminationTab