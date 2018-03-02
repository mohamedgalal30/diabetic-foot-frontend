import React from 'react';
import MainTab from './investigationsTabs/MainTab'
import LaboratoryTab from './investigationsTabs/LaboratoryTab'
import Radiological from './investigationsTabs/RadiologicalTab'
const TABS = {
    Main: 12,
    Laboratory: 13,
    Radiological: 14,
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
            case TABS.Radiological:
                TabContent = <Radiological radiological={radiological} onChange={this.props.onChange} />
                break;

        }


        return (
            <div className="row">
                <div className="col s12">
                    <ul className="nav nav-tabs">
                        <li onClick={this.changeTab.bind(this, TABS.Main)} className={`tab col s4 ${tab == 12 ? 'active' : ""}`}><a title="Main">Main</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.Laboratory)} className={`tab col s4 ${tab == 13 ? 'active' : ""}`}><a title="Past Foot History" >Laboratory</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.Radiological)} className={`tab col s4 ${tab == 14 ? 'active' : ""}`}><a title="Radiological">Radiological</a></li>
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
export default InvestigationsTab