import React from 'react';
import PropTypes  from 'prop-types';

import PatientListRow from './PatientListRow';

const PatientList = ({patients}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {patients.map(patient => 
          <PatientListRow key={patient.id} patient={patient} />
        )}
      </tbody>
    </table>
  );
};

// PatientList.propTypes = {
//   patients: PropTypes.array.isRequired
// };

export default PatientList;