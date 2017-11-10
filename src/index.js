import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


window.getPatients = function getPatients(str, cb) {
    if (typeof str == "function") cb = str;
    console.log(str)
    cb([{ id: 1, name: 'aaaaaaaaaaaaaaa' }, { id: 2, name: 'bbbbbbbbbbbbbbbb' }])
}

window.getPatient = function getPatient(id, cb) {
    console.log("getPatient id", id)
    cb({ id: 1, name: 'aaaaaaaaaaaaaaa' })
}
window.createPatient= function(patient, cb){
    console.log("createPatient", patient)
    cb(true)
}
window.updatePatient= function(id, patient, cb){
    console.log("updatePatient", id, patient)
    cb(true)
}
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();