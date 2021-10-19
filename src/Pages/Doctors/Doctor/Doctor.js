import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Doctor = (props) => {
    const { name, img, designation } = props.doctor;
    return (
        <div>
            <Card className="text-center">
                <CardMedia
                    component="img"
                    className="img-fluid p-5"
                    height="140"
                    image={img}
                    sx={{ borderRadius: '50%' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="h6" className="text-info fw-bold">
                        {designation}
                    </Typography>
                </CardContent>

                <Button sx={{ marginLeft: 2, marginBottom: 2 }} variant="contained" color="success" size="small"> Appoint </Button>

            </Card>

        </div>
    );
};

export default Doctor;