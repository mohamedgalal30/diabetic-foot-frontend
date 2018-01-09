import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxGroup extends React.Component {
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
        <div className="row">
          <label className="white-text">{this.props.title}</label>
        </div>
        {
          list.map((item, index) => {
            return <div key={index} className="row">
              <div className="col-md-12">
                <label>{item.label}</label>
                <input type="checkbox" name={item.name} checked={item.checked} onChange={(e) => this.props.onChange(e)} />
              </div>
            </div>
          })
        }
      </div>
    );
  }
}

// CheckBoxGroup.propTypes = {
//   item: PropTypes.object.isRequired, 
//   handleChange: PropTypes.func.isRequired
// };

export default CheckBoxGroup;
