import { Grid, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Team from './Team/Team';
import 'animate.css';

const Ourteam = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/information.json')
            .then(res => res.json())
            .then(data => setTeam(data.ourTeam))

    }, []);
    return (
        <div>
            <Typography sx={{ textAlign: "center", pt: 3, fontWeight: 800, mb: 5 }} variant="h4">Meet Our Team</Typography>

            <Box className="container mt-5" sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* using spinner */}
                    {team.length === 0 ? <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>
                        :
                        team.map(dtr => <Grid className="animate__animated animate__backInDown" item xs={12} sm={4} md={4} >
                            <Team team={dtr} key={dtr.id}></Team>
                        </Grid>)

                    }
                </Grid>
            </Box>




        </div>
    );
};

export default Ourteam;