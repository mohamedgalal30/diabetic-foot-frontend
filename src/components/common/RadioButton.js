import React from 'react';

class RadioButton extends React.Component {
    render() {
        return (
            <div className="row">
                <label className="white-text">Type Of Diabetes</label>
                <div className="col s8">
                    <div className="row">
                        <p className="col s4">
                            <input id="type1" checked={this.props.diabeticHistory.typeOfDiabetes == "type1"} onChange={(e) => onChange(e)} type="radio" name="history.diabeticHistory.typeOfDiabetes" value="type1" />
                            <label htmlFor="type1">Type1</label>
                        </p>
                        <p className="col s4">
                            <input id="type2" checked={this.props.diabeticHistory.typeOfDiabetes == "type2"} type="radio" onChange={(e) => onChange(e)} name="history.diabeticHistory.typeOfDiabetes" value="type2" />
                            <label htmlFor="type2">Type2</label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadioButton;
