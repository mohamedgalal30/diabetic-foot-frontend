import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
// import CheckBox from './common/CheckBox';

class PatientForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={this.props.patient.name}
            onChange={this.props.onChange} />
          <input
            type="submit"
            /* disabled={this.props.saving} */
            /* value={this.props.saving ? 'Saving...' : 'Save'} */
            className="btn btn-primary"
            onClick={this.props.onSave} />
        </form>
      </div>
    );
  }
}

PatientForm.propTypes = {
  patient: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // saving: PropTypes.bool
};

export default PatientForm;
