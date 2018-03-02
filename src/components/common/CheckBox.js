import React from 'react';

class CheckBox extends React.Component {
	render() {
		return (
			<div className="custom-control custom-checkbox">
				<input id={`custom-heck-${this.props.id}`} className="custom-control-input" checked={this.props.checked} onChange={this.props.onChange} name={this.props.name} type="checkbox" />
				<label htmlFor={`custom-heck-${this.props.id}`} className="custom-control-label pull-left">{this.props.title}</label>
			</div>
		);
	}
}

export default CheckBox;
