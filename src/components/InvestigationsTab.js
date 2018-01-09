import React from 'react';
import MainTab from './investigationsTabs/MainTab'
import LaboratoryTab from './investigationsTabs/LaboratoryTab'
import Radiological from './investigationsTabs/RadiologicalTab'
const TABS = {
    Main: 12,
    Laboratory: 13,
    NeurologicalAssessment: 14,
}

class InvestigationsTab extends React.Component {

    changeTab(tab) {
        this.props.changeTab(tab)
    }

    render() {
        let {
            main,
            laboratory,
            radiological,
        } = this.props.investigations;
        let tab = this.props.tab;
        let TabContent;
        switch (tab) {
            case TABS.Main:
                TabContent = <MainTab main={main} onChange={this.props.onChange} />
                break;
            case TABS.Laboratory:
                TabContent = <LaboratoryTab laboratory={laboratory} onChange={this.props.onChange} />
                break;
            case TABS.NeurologicalAssessment:
                TabContent = <Radiological radiological={radiological} onChange={this.props.onChange} />
                break;

        }


        return (
            <div className="col s12  carousel-item " id="tab2" >
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs" id="Slist">
                            <li onClick={this.changeTab.bind(this, TABS.Main)} className="tab col "><a className={`tab col s4 ${tab == 9 ? 'active' : ""}`} title="Main">Main</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.Laboratory)} className="tab col "><a className={`tab col s4 ${tab == 10 ? 'active' : ""}`} title="Past Foot History" >Laboratory</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.NeurologicalAssessment)} className="tab col "><a className={`tab col s4 ${tab == 11 ? 'active' : ""}`} title="NeurologicalAssessment">NeurologicalAssessment</a></li>
                        </ul>
                        <div className="col s12  carousel-item " id="tab1">
                            <div className="container">
                                <div className="row">
                                    {TabContent}
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