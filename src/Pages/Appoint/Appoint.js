import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/useFirebase/useFirebase';

const Appoint = () => {

    const { user } = useFirebase();
    const { dID } = useParams();
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/information.json')
            .then(res => res.json())
            .then(data => setDoctor(data.doctors))

    }, []);

    const individual = doctor.filter(tr => tr.id == dID);
    return (
        <div className="container w-50">
            <Typography className=" text-center" sx={{ pt: 3, fontWeight: 800, color: "#496bf2" }} variant="h5"> Hello {user.displayName}  </Typography> <br />
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 600, marginBottom: 2 }} variant="body1">Selected :- {individual[0]?.name}</Typography>
            <h6> <span className="text-danger">***</span> Fill the form below and we will get back soon to you for more updates</h6>
            <form onSubmit="" className="row g-3">
                <div className="col-md-6">
                    <label for="inputName4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName4" />
                </div>
                <div className="col-md-6">
                    <label for="inputNumber" className="form-label">Phone no</label>
                    <input type="number" className="form-control" id="inputNumber" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Gender</label>
                    <select id="inputState" className="form-select">
                        <option selected>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button onClick={() => alert("Successfully done")} type="submit" className="btn btn-info">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Appoint;