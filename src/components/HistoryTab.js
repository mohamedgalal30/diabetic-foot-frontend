import React from 'react';
import InfoTab from './historyTabs/InfoTab'
import PCompTab from './historyTabs/PCompTab'
import PFHTab from './historyTabs/PFHTab'
import DHistTab from './historyTabs/DHistTab'
import PMHTab from './historyTabs/PMHTab'
import DrugHistTab from './historyTabs/DrugHistTab'
import FHistTab from './historyTabs/FHistTab'
import PsHistTab from './historyTabs/PsHistTab'
const TABS = {
    PInfo: 1,
    PComp: 2,
    PFH: 3,
    DHist: 4,
    PMH: 5,
    DrugHist: 6,
    FHist: 7,
    PsHist: 8,
}

class HistoryTab extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tab: TABS.PComp
    //     };
    // }

    changeTab(tab) {
        this.props.changeTab(tab)
    }


    render() {
        let {
            info,
            presentingComplaint,
            pastFootHistory,
            diabeticHistory,
            pastMedicalHistory,
            drugHistory,
            familyHistory,
            psychosocialHistory
        } = this.props.history;
        let tab = this.props.tab;
        let TabContent;
        switch (tab) {
            case TABS.PInfo:
                TabContent = <InfoTab info={info} onChange={this.props.onChange} />
                break;
            case TABS.PComp:
                TabContent = <PCompTab presentingComplaint={presentingComplaint} onChange={this.props.onChange} />
                break;
            case TABS.PFH:
                TabContent = <PFHTab pastFootHistory={pastFootHistory} onChange={this.props.onChange} />
                break;
            case TABS.DHist:
                TabContent = <DHistTab diabeticHistory={diabeticHistory} onChange={this.props.onChange} />
                break;
            case TABS.PMH:
                TabContent = <PMHTab pastMedicalHistory={pastMedicalHistory} onChange={this.props.onChange} />
                break;
            case TABS.DrugHist:
                TabContent = <DrugHistTab drugHistory={drugHistory} onChange={this.props.onChange} />
                break;
            case TABS.FHist:
                TabContent = <FHistTab familyHistory={familyHistory} onChange={this.props.onChange} />
                break;
            case TABS.PsHist:
                TabContent = <PsHistTab psychosocialHistory={psychosocialHistory} onChange={this.props.onChange} />
                break;

        }


        return (
            <div className="row">
                <div className="col s12">
                    <ul className="nav nav-tabs">
                        <li onClick={this.changeTab.bind(this, TABS.PInfo)} className={`tab col s4 ${tab == TABS.PInfo ? 'active' : ""}`}><a title="Patient Info">Patient Info</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.PComp)} className={`tab col s4 ${tab == TABS.PComp ? 'active' : ""}`}><a title="Presenting Complaint">Presenting Complaint</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.PFH)} className={`tab col s4 ${tab == TABS.PFH ? 'active' : ""}`}><a title="Past Foot History" >Past Foot History</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.DHist)} className={`tab col s4 ${tab == TABS.DHist ? 'active' : ""}`}><a title="Diabetic History">Diabetic History</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.PMH)} className={`tab col s4 ${tab == TABS.PMH ? 'active' : ""}`}><a title="Past Medical History">Past Medical History</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.DrugHist)} className={`tab col s4 ${tab == TABS.DrugHist ? 'active' : ""}`}><a title="Drug History">Drug History</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.FHist)} className={`tab col s4 ${tab == TABS.FHist ? 'active' : ""}`}><a title="Family History">Family History</a></li>
                        <li onClick={this.changeTab.bind(this, TABS.PsHist)} className={`tab col s4 ${tab == TABS.PsHist ? 'active' : ""}`}><a title="Psychosocial History">Psychosocial History</a></li>
                    </ul>
                    <div className="tab-cotent" >
                        <div className="container">
                            <div className="tab-pane">
                                {TabContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HistoryTab