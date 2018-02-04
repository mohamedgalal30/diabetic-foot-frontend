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
            <div className=" "  >
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs" id="Slist">
                            <li onClick={this.changeTab.bind(this, TABS.PInfo)} className="tab col "><a className={`tab col s4 ${tab == TABS.PInfo ? 'active' : ""}`} title="Patient Info">Patient Info</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PComp)} className="tab col "><a className={`tab col s4 ${tab == TABS.PComp ? 'active' : ""}`} title="Presenting Complaint">P.Comp</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PFH)} className="tab col "><a className={`tab col s4 ${tab == TABS.PFH ? 'active' : ""}`} title="Past Foot History" >PFH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DHist)} className="tab col "><a className={`tab col s4 ${tab == TABS.DHist ? 'active' : ""}`} title="Diabetic History">D.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PMH)} className="tab col "><a className={`tab col s4 ${tab == TABS.PMH ? 'active' : ""}`} title="Past Medical History">PMH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DrugHist)} className="tab col "><a className={`tab col s4 ${tab == TABS.DrugHist ? 'active' : ""}`} title="Drug History">Drug Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.FHist)} className="tab col "><a className={`tab col s4 ${tab == TABS.FHist ? 'active' : ""}`} title="Family History">F.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PsHist)} className="tab col "><a className={`tab col s4 ${tab == TABS.PsHist ? 'active' : ""}`} title="Psychosocial History">Ps.Hist</a></li>
                        </ul>
                        <div className=" " >
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
export default HistoryTab