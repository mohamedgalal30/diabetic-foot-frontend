import React from 'react';

class InvestigationsTab extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tab: TABS.NeurologicalAssessment
    //     };
    // }

    changeTab(tab) {
        this.props.changeTab(tab)
    }

    render() {
        let { diagnosis, tab } = this.props;
        return (
            <div className="col s12  carousel-item " id="tab2" >
                <div className="row">
                    <div className="col s12">
                        <div className="col s12  carousel-item " id="tab1">
                            <div className="container">
                                <div className="row">
                                    html here
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