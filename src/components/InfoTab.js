import React from 'react';

export default function InfoTab({ patient, onSave, onChange }) {
    let { name, age, gender, address, phone, job } = patient;
    return (
        <div className="col s12  carousel-item " id="tab1">
            <div className="container">

                <div className="row">
                    <div className="input-field col s8">
                        <label htmlFor="nameP" className=" white-text">Patient Name</label>
                        <input value={name} onChange={(e)=>onChange(e,'info')} name="name" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="ageP" className=" white-text">Patient Age</label>
                        <input type="number" onChange={(e)=>onChange(e,'info')} value={age} name="age" required />
                    </div>
                    <div className="col s8">
                        <div className="row">
                            <p className="col s4">
                                <input id="male" type="radio" name="gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </p>
                            <p className="col s4">
                                <input id="female" type="radio" name="gender" value="female" />
                                <label htmlFor="female">Female</label>
                            </p>
                        </div>
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="AddressP" className=" white-text">Patient Address</label>
                        <input value={address} onChange={(e)=>onChange(e,'info')} name="address" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="telP" className=" white-text">Patient Phone</label>
                        <input value={phone} onChange={(e)=>onChange(e,'info')} type="tel" name="phone" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="JobP" className=" white-text">Patient Job</label>
                        <input value={job} onChange={(e)=>onChange(e,'info')} name="job" required />
                    </div>

                    <div className="col s4">
                        <button className="btn waves-effect waves-red" id="btn1" onClick={onSave} type="submit">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}