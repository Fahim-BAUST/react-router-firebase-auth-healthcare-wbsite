import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import 'animate.css';

const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/information.json')
            .then(res => res.json())
            .then(data => setDoctor(data.doctors))

    }, []);
    return (
        <div>
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, color: "#496bf2", marginTop: 2 }} variant="body1">MEDICAL SPECIALISTS</Typography>

            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, mb: 5 }} variant="h4">We have the best specialists of the country</Typography>

            <Box className="container mt-5" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {doctor.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        doctor.map(dtr => <Grid className="animate__animated animate__zoomIn" item xs={12} sm={4} md={4} >
                            <Doctor doctor={dtr} key={dtr.id}></Doctor>
                        </Grid>)

                    }
                </Grid>
            </Box>


        </div>
    );
};

export default Doctors;