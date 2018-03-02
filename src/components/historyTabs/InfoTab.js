import React from 'react';
import TextInput from '../common/TextInput';

export default function InfoTab({ info, onChange }) {
    let { name, age, gender, address, phone, job } = info;
    return (
        <div className="row col-md-12">
            <div className="col-md-4">
                <TextInput id="name" label="Patient Name" value={name} onChange={(e) => onChange(e)} name="history.info.name" />
            </div>

            <div className="col-md-4">
                <TextInput id="age" label="Patient Age" type="number" onChange={(e) => onChange(e)} value={age} name="history.info.age" />
            </div>
            <div className="col-md-4">
                <div className="row">
                    <p className="col s4">
                        <input id="male" checked={gender == "male"} onChange={(e) => onChange(e)} type="radio" name="history.info.gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </p>
                    <p className="col s4">
                        <input id="female" checked={gender == "female"} type="radio" onChange={(e) => onChange(e)} name="history.info.gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </p>
                </div>
            </div>

            <div className="col-md-4">
                <TextInput id="address" label="Patient Address" value={address} onChange={(e) => onChange(e)} name="history.info.address" />
            </div>

            <div className="col-md-4">
                <TextInput id="phone" label="Patient Phone" value={phone} onChange={(e) => onChange(e)} type="tel" name="history.info.phone" />
            </div>

            <div className="col-md-4">
                <TextInput id="job" label="Patient Job" value={job} onChange={(e) => onChange(e)} name="history.info.job" />
            </div>

        </div>
    )
}