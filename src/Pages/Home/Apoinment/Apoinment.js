import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    backgroundImage: `url(${bg})`,
    backgroundColor: 'rgba(0, 26, 51, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '150px'
}

const Apoinment = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, my: 5}}>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <img src={doctor} alt="doctor.com" style={{ width: 500, marginTop: '-115px' }} />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }} >
                        <Box>
                            <Typography variant="h5" style={{ color: 'rgb(26, 198, 255)' }} >
                                APPOINMENT
                            </Typography>;
                            <Typography variant="h3" style={{ color: 'rgb(242, 242, 242)' }} >
                                Make an appoinment Today
                            </Typography>
                            <Typography variant="h6" style={{ color: 'rgb(242, 242, 242)', fontSize: '17px', margin: '25px 0' }}>
                                It is a long established fact that a reader will be distractedby the readabble content of a page when looking ar its.
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', py: 1, px: 5 }}> Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Apoinment;