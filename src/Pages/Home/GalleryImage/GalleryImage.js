
import { Typography } from '@mui/material';
import React from 'react';

const GalleryImage = () => {

    return (
        <div >
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, color: "#496bf2", marginTop: 2, marginBottom: 5 }} variant="h3">Gallery</Typography>

            <div className="container h-50">
                <div className="row">
                    <div className="col-lg-4  ">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/giatrician-consulting-invalid-woman-wheelchair-hospital-examination-room_482257-8481.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/empty-stomatology-orthodontist-hospital-cabinet-with-nobody-it_482257-10435.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/long-hospital-corridor-with-empty-seats_117023-1679.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/young-cardiologist-checking-examining-senior-patient-heart-using-stethoscope-while-patient-is-laying-hospital-bed-set-diagnosis-therapy-breathing-with-help-from-test-tube_482257-2282.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/stylish-beautiful-spacious-dental-clinic_8353-9586.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/disabled-senior-woman-with-walking-frame-sitting-hospital-waiting-area-medical-consultation-against-infection-with-coronavirus_482257-8530.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/stomatology-assistant-sitting-desk-using-computer_482257-12263.jpg" alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src="https://image.freepik.com/free-photo/doctor-looking-information-database_1098-2572.jpg" alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default GalleryImage;