import { TextField, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black mt-5 pb-4 sticky-bottom">
            <div className="container ">
                <div className="row">
                    <div className="col-xl-5 col-md-6 col-xs-6 col-6 text-justify" >
                        <Typography className="text-info" sx={{ pt: 3, fontWeight: 500 }} variant="h5">About Us</Typography>
                        <Typography className="text-white text-justify " sx={{
                            pt: 3
                        }} variant="caption">Choosing the right hospital and physician are important factors to consider that significantly influence a patient’s treatment. The preferred choice for many patients is choosing private care.</Typography>

                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-6 col-6">
                        <div className="pt-5 px-5">
                            <i style={{ color: "goldenrod" }} className="fas fa-map-marker-alt me-2 pt-1"></i>
                            <Typography className="text-white text-justify " sx={{
                                pt: 3
                            }} variant="caption">Street,Helsinki, Finland</Typography>
                            <br />
                            <i style={{ color: "lightskyblue" }} className="fas fa-phone-alt me-2"></i>
                            <Typography className="text-white text-justify " sx={{
                                pt: 3
                            }} variant="caption">+001153******</Typography>

                            <br />
                            <i style={{ color: "white" }} className="fas fa-mail-bulk me-2"></i>
                            <Typography className="text-white text-justify " sx={{
                                pt: 3
                            }} variant="caption">careforyou@gmail.com</Typography> <br />

                            <i style={{ color: "#4267B2" }} className="fab fa-facebook me-3 fs-4 mt-3"></i>
                            <i style={{ color: "red" }} className="fab fa-instagram me-3 fs-4"></i>
                            <i style={{ color: "#00acee" }} className="fab fa-twitter-square me-3 fs-4"></i>
                        </div>

                    </div>
                    <div className="col-xl-4 col-xs-12 text-center">
                        <Typography className="text-info" sx={{ pt: 3, fontWeight: 500, mb: 2 }} variant="h5">Contact Us</Typography>

                        <TextField style={{ backgroundColor: 'white' }} label="email" variant="standard" color="warning" focused
                        /> <br /> <TextField style={{ backgroundColor: 'white' }} label="message" variant="standard" color="warning" focused
                        /> <br />
                        <button type="button" className="btn btn-info mt-2 px-5">Submit</button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;