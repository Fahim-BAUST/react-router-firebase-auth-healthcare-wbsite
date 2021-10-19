import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Team = (props) => {
    const { name, img } = props.team;
    return (
        <div>
            <Card className="text-center shadow-lg rounded-circle">
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
                </CardContent>
            </Card>
        </div>
    );
};

export default Team;