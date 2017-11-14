import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


window.getPatients = function getPatients(str, cb) {
    if (typeof str == "function") cb = str;
    console.log(str)
    cb([{ info: { id: 1, name: 'aaaaaaaaaaaaaaa' } }, { info: { id: 2, name: 'bbbbbbbbbbbbbbbb' } }])
}

window.getPatient = function getPatient(id, cb) {
    console.log("getPatient id", id)
    cb({
        info: { name: "mohamed", age: "", gender: "", address: "", phone: "", job: "" },
        history: {
            presentingComplaint: {
                skinBreakdown: {
                    value: false,
                    details: {
                        whereIsTheProblem: "",
                        whenDidItStart: "",
                        howDidItStart: "",
                        whatMakesItBetter: "",
                        whatMakesItWorse: "",
                        howHasItBeenTreated: "",
                    }
                },
                swelling: {
                    value: false,
                    details: {
                        whereIsTheProblem: "",
                        whenDidItStart: "",
                        howDidItStart: "",
                        whatMakesItBetter: "",
                        whatMakesItWorse: "",
                        howHasItBeenTreated: "",
                    }
                },
                colorChange: {
                    value: false,
                    details: {
                        whereIsTheProblem: "",
                        whenDidItStart: "",
                        howDidItStart: "",
                        whatMakesItBetter: "",
                        whatMakesItWorse: "",
                        howHasItBeenTreated: "",
                    }
                },
                pain: {
                    value: false,
                    details: {
                        whenDidItStart: "",
                        howDidItStart: "",
                        wasThereAnInjury: "",
                        whereIsThePain: "",
                        whatIsItsNature: "",
                        whatAggravatesThePain: "",
                        whatRelievesThePain: "",
                        whenDoesItOccur: "",
                    }
                },
            },
            pastFootHistory: {
                previousUlcersAndTreatment: false,
                amputations: {
                    value: false,
                    type: "" //[major or minor]
                },
                peripheralAngioplasties: false,
                peripheralArterialBypasses: false
            },
            diabeticHistory: {
                typeOfDiabetes: "", // [type1, type2]
                durationOfDiabetes: {
                    value: "", //[discover, treatment]
                    details: ""
                },
                treatmentOfDiabetes: {
                    value: "",//[Insulin, oral hypoglycemic] 
                    details: ""
                },
                complicationsOfDiabetes: {
                    retinopathy: false,
                    nephropathy: false,
                    cardiovascular: false,
                    cerebrovascular: false,
                }
            },
            pastMedicalHistory: {
                seriousIllness: false,
                accidents: false,
                injuries: false,
                hospitalAdmissions: false,
                operations: false,
            },
            drugHistory: {
                presentMedication: "",
                knownAllergies: "",
            },
            familyHistory: {
                diabetes: false,
                otherSeriousIllness: "",
                causeOfDeathOfNearRelatives: ""
            },
            psychosocialHistory: {
                occupation: "",
                numberOfCigarettes: "", //smoked per day
                numberOfUnitsOfAlcohol: "", //per day
                psychiatricIllness: "",
                homeCircumstances: "",
                livesWith: "", //[Alone, friends or relative]
            }
        }
    })
}
window.createPatient = function (patient, cb) {
    console.log("createPatient", patient)
    cb(true)
}
window.updatePatient = function (id, patient, cb) {
    console.log("updatePatient", id, patient)
    cb(true)
}
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();