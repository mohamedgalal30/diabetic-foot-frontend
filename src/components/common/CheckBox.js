  import React from 'react';
  import PropTypes  from 'prop-types';
  
class CheckBox extends React.Component {
  render() {
    return (
     <div className="field">
        <div>
          <label>{this.props.title}</label>
          <input type="checkbox" name={this.props.name} value={this.props.id} checked={this.props.checked} onChange={this.props.onChange}/>
        </div>
      </div>
    );
  }
}

// CheckBox.propTypes = {
//   item: PropTypes.object.isRequired, 
//   handleChange: PropTypes.func.isRequired
// };

export default CheckBox;
