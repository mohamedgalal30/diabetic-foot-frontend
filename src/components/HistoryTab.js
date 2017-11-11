import React from 'react';
import PCompTab from './historyTabs/PCompTab'
import PFHTab from './historyTabs/PFHTab'
import DHistTab from './historyTabs/DHistTab'
import PMHTab from './historyTabs/PMHTab'
import DrugHistTab from './historyTabs/DrugHistTab'
import FHistTab from './historyTabs/FHistTab'
import PsHistTab from './historyTabs/PsHistTab'
const TABS = {
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
            <div className="col s12  carousel-item " id="tab2" >
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs" id="Slist">
                            <li onClick={this.changeTab.bind(this, TABS.PComp)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Presenting Complaint">P.Comp</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PFH)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Past Foot History" >PFH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DHist)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Diabetic History">D.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PMH)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Past Medical History">PMH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DrugHist)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Drug History">Drug Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.FHist)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Family History">F.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PsHist)} className="tab col "><a className={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Psychosocial History">Ps.Hist</a></li>
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
export default HistoryTab