import React from 'react';
import PCompTab from './historyTabs/PCompTab'
import PFHTab from './historyTabs/PFHTab'
import DHistTab from './historyTabs/DHistTab'
import PMHTab from './historyTabs/PMHTab'
import DrugHistTab from './historyTabs/DrugHistTab'
import FHistTab from './historyTabs/FHistTab'
import PsHistTab from './historyTabs/PsHistTab'
const TABS = {
    PComp: "PComp",
    PFH: "PFH",
    DHist: "DHist",
    PMH: "PMH",
    DrugHist: "DrugHist",
    FHist: "FHist",
    PsHist: "PsHist",
}

class HistoryTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: TABS.PComp
        };
    }

    changeTab(tab) {
        this.setState({ tab })
    }

    render() {
        let tab = this.state.tab;
        let TabContent;
        switch (tab) {
            case TABS.PComp:
                TabContent = <PCompTab onChange={this.props.onChange} onSave={this.props.onSave}/>
                break;
            case TABS.PFH:
                TabContent = <PFHTab />
                break;
            case TABS.DHist:
                TabContent = <DHistTab />
                break;
            case TABS.PMH:
                TabContent = <PMHTab />
                break;
            case TABS.DrugHist:
                TabContent = <DrugHistTab />
                break;
            case TABS.FHist:
                TabContent = <FHistTab />
                break;
            case TABS.PsHist:
                TabContent = <PsHistTab />
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