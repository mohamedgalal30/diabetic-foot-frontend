import React from 'react';
import PropTypes  from 'prop-types';

import PatientListRow from './PatientListRow';

const PatientList = ({patients}) => {
  if(patients.length){

    return (
      <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => {
          var info = patient.history.info || {};
          return <PatientListRow key={index} patient={info} />
        }
      )}
      </tbody>
    </table>
  );
}else{
  return <div>Loading...</div>
}
};

// PatientList.propTypes = {
//   patients: PropTypes.array.isRequired
// };

export default PatientList;