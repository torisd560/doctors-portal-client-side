import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Services/Service/Service'
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teath from '../../../images/whitening.png'


const services = [
    {
        name: "Fluoride Treatment",
        description: "Fluoride is a naturally occurring mineral found in water in varying amounts, depending on where in the UK you live. It can help prevent tooth decay.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "A cavity is a hole in a tooth that develops from tooth decay. Cavities form when acids in the mouth wear down, or erode, a tooth's hard outer layer (enamel). Anyone can get a cavity.",
        img: cavity
    },
    {
        name: "Teath Whitening",
        description: "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamide peroxide)",
        img: teath
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, margin : '100px 20px' }}>
            <Container>
                <Typography variant="h6" sx={{ mt: 3}} style = {{color : 'rgb(26, 198, 255)'}} component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h3" sx={{ mx: 2, mb: 3, py: 2 , fontWeight : 500}} component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;