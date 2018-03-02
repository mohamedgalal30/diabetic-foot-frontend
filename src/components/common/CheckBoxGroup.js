import React from 'react';
import CheckBox from './CheckBox';

class CheckBoxGroup extends React.Component {
	render() {
		let list = this.props.list;
		return (
			<div className="row">
				<div className="col-md-2">
					<label className="white-text">{this.props.title}</label>
				</div>
				<div className="col-md-10">
					{
						list.map((item, index) => {
							return <div key={index} className="row">
								<CheckBox title={item.label} name={item.name} checked={item.checked} onChange={(e) => this.props.onChange(e)} />
							</div>
						})
					}
				</div>
			</div>
		);
	}
}

export default CheckBoxGroup;
