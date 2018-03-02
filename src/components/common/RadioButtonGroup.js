import React from 'react';

class RadioButtonGroup extends React.Component {
	// constructor(props){
	//   super(props);
	//   let values = [];
	//   props.list.map((item, index)=>{
	//     return item.checked?
	//   })
	//   this.setState(values)
	// }
	// onItemChange(event){
	//   let values
	//   this.props.handleChange(event)
	// }
	render() {
		let list = this.props.list;
		return (
			<div className="row">
				<label className="white-text col-md-2">{this.props.title}</label>
				<div className="col-md-10">
					{
						list.map((item, index) => {
							return <div key={index} >
								<label>{item.label}</label>
								<input type="radio" name={this.props.name} value={item.value} checked={item.checked} onChange={(e) => this.props.onChange(e)} />
							</div>
						})
					}
				</div>
			</div>
		);
	}
}

export default RadioButtonGroup;
