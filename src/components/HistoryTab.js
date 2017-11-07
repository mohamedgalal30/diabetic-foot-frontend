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
                TabContent = <PCompTab
                />
                break;
            case TABS.PFH:
                TabContent = <PFHTab
                />
                break;
            case TABS.DHist:
                TabContent = <DHistTab
                />
                break;
            case TABS.PMH:
                TabContent = <PMHTab
                />
                break;
            case TABS.DrugHist:
                TabContent = <DrugHistTab
                />
                break;
            case TABS.FHist:
                TabContent = <FHistTab
                />
                break;
            case TABS.PsHist:
                TabContent = <PsHistTab
                />
                break;

        }


        return (
            <div class="col s12  carousel-item " id="tab2" >
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs" id="Slist">
                            <li onClick={this.changeTab.bind(this, TABS.PComp)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Presenting Complaint">P.Comp</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PFH)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Past Foot History" >PFH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DHist)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Diabetic History">D.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PMH)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Past Medical History">PMH</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.DrugHist)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Drug History">Drug Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.FHist)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Family History">F.Hist</a></li>
                            <li onClick={this.changeTab.bind(this, TABS.PsHist)} class="tab col "><a class={`tab col s4 ${tab == "info" ? 'active' : ""}`} title="Psychosocial History">Ps.Hist</a></li>
                        </ul>
                        <div class="col s12  carousel-item " id="tab1">
                            <div class="container">
                                {TabContent}
                                <div class="row">
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