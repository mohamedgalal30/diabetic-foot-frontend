import React from 'react';

export default function InfoTab({ info, onChange }) {
    let { name, age, gender, address, phone, job } = info;
    return (
        <div className="col s12  carousel-item " id="tab1">
            <div className="container">

                <div className="row">
                    <div className="input-field col s8">
                        <label htmlFor="nameP" className=" white-text">Patient Name</label>
                        <input value={name} onChange={(e)=>onChange(e)} name="history.info.name" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="ageP" className=" white-text">Patient Age</label>
                        <input type="number" onChange={(e)=>onChange(e)} value={age} name="history.info.age" required />
                    </div>
                    <div className="col s8">
                        <div className="row">
                            <p className="col s4">
                                <input id="male" checked={gender == "male"} onChange={(e)=>onChange(e)} type="radio" name="history.info.gender" value="male" />
                                <label htmlFor="male">Male</label>
                            </p>
                            <p className="col s4">
                                <input id="female" checked={gender == "female"} type="radio" onChange={(e)=>onChange(e)} name="history.info.gender" value="female" />
                                <label htmlFor="female">Female</label>
                            </p>
                        </div>
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="AddressP" className=" white-text">Patient Address</label>
                        <input value={address} onChange={(e)=>onChange(e)} name="history.info.address" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="telP" className=" white-text">Patient Phone</label>
                        <input value={phone} onChange={(e)=>onChange(e)} type="tel" name="history.info.phone" required />
                    </div>

                    <div className="input-field col s8">
                        <label htmlFor="JobP" className=" white-text">Patient Job</label>
                        <input value={job} onChange={(e)=>onChange(e)} name="history.info.job" required />
                    </div>

                </div>
            </div>
        </div>
    )
}