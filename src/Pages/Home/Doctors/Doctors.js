import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'


const Doctors = () => {
    return (
        <Container sx={{ marginTop: '100px', mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'rgb(26, 198, 255)', my: 5 }}>
                Our Doctors
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img src={doctor} alt="" style={{ width: '400px' }} />
                    <Paper elevation={0} >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Dr.Caudi
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '15px' }}>
                        + 614799956467252
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={doctor} alt="" style={{ width: '400px'}} />
                    <Paper elevation={0} >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Dr.Caudi
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '15px' }}>
                            + 614799956467252
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img src={doctor} alt="" style={{ width: '400px' }} />
                    <Paper elevation={0} >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Dr.Caudi
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '15px' }}>
                            + 614799956467252
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Doctors;