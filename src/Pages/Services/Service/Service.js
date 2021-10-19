import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div >
            <Card className="text-center">
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 20)} <span className="fw-bold">...read more</span>
                    </Typography>
                </CardContent>

                <NavLink className="text-decoration-none" to={`/details/${id}`}>
                    <Button sx={{ marginLeft: 2, marginBottom: 2 }} variant="contained" color="success" size="small">Details </Button>
                </NavLink>
            </Card>

        </div>
    );
};

export default Service;