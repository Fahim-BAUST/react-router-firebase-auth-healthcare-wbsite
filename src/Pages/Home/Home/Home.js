import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import 'animate.css';
import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Service from '../../Services/Service/Service';

const Home = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/information.json')
            .then(res => res.json())
            .then(data => setService(data.services.slice(0, 6)))

    }, []);

    return (
        <div >
            <h1 className="text-center mt-3 mb-4 animate__animated animate__flip fw-bold" style={{ color: "#496bf2", fontSize: "70px", fontFamily: "-moz-initial" }}>CareforYou Clinic</h1>
            <Banner></Banner>

            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, color: "#496bf2", marginTop: 10, marginBottom: 5 }} variant="h3">Our Services</Typography>


            <Box className="container" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {service.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        service.map(ser => <Grid className="animate__animated animate__rollIn" item xs={12} sm={4} md={4} >
                            <Service service={ser} key={ser.id}></Service>
                        </Grid>)

                    }
                </Grid>
            </Box>

        </div>
    );
};

export default Home;