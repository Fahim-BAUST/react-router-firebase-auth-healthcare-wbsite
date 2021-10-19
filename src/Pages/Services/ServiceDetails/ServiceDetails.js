import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { detailsID } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Fahim-BAUST/json-files/main/information.json')
            .then(res => res.json())
            .then(data => setService(data.services))
    }, []);

    console.log(service);

    const individual = service.filter(tr => tr.id == detailsID);


    return (
        <div>
            <div class="container">
                <div class="row ">
                    <div class="col-xl-12">
                        <Typography className=" text-center" sx={{ pt: 3, fontWeight: 800, color: "#496bf2" }} variant="h3">{individual[0]?.name}</Typography>
                        <div className="text-center mt-3">
                            <img className="img-fluid" src={individual[0]?.img} alt="" />
                        </div>

                        <Typography className="text-black" sx={{ pt: 3, fontWeight: 800 }} variant="h5">Description of {individual[0]?.name}</Typography>
                        <Typography className="text-black" sx={{ pt: 3 }} variant="body1">{individual[0]?.description}</Typography>

                        <Typography className="text-black" sx={{ pt: 3, fontWeight: 800 }} variant="h5">When should you seek a {individual[0]?.name}</Typography>
                        <Typography className="text-black" sx={{ pt: 3 }} variant="body1">{individual[0]?.need}</Typography>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;