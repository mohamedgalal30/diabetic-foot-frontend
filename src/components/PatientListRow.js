import React from 'react';
import PropTypes  from 'prop-types';
import {Link} from 'react-router-dom';

const PatientListRow = ({patient}) => {
  return (
    <tr>
      <td><Link to={`/patients/${patient.id}/edit`}>{patient.name}</Link></td>
    </tr>
  );
};

// PatientListRow.propTypes = {
//   patient: PropTypes.object.isRequired
// };

export default PatientListRow;
