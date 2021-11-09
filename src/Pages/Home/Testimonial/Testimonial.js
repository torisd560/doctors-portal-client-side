import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'

const Testimonial = () => {
    return (
        <Box sx={{ marginTop : '100px' , mb : 5}}>
            <Container>
                <div style={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ color: 'rgb(26, 198, 255)', fontWeight: 'bold' }}>
                        TESTIMONIALS
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mt : 2, marginBottom : '100px' }}>
                        What Our Pateints Says
                    </Typography>
                </div>

                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '18px' }}>
                                Dr. Meena is an excellent dentist. She took the time to explain every procedure she was doing. I'm not ashamed of me teeth smile.
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                                <Grid item sm={6} md={6}>
                                    <img src={people1} alt="" />
                                </Grid>
                                <Grid item sm={6} md={6} sx={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{ color: 'rgb(26, 198, 255)', fontWeight: 'bold' }}>
                                        Winshon Herry
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '17px' }}>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '18px' }}>
                                Dr. Meena is an excellent dentist. She took the time to explain every procedure she was doing. I'm not ashamed of me teeth  smile.
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                                <Grid item sm={6} md={6}>
                                    <img src={people2} alt="" />
                                </Grid>
                                <Grid item sm={6} md={6} sx={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{ color: 'rgb(26, 198, 255)', fontWeight: 'bold' }}>
                                        Jackline Sumy
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '17px' }}>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Paper elevation={3} sx={{ p: 5 }}>
                            <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '18px' }}>
                                Dr. Meena is an excellent dentist. She took the time to explain every procedure she was doing. I'm not ashamed of me teeth smile.
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                                <Grid item sm={6} md={6}>
                                    <img src={people3} alt="" />
                                </Grid>
                                <Grid item sm={6} md={6} sx={{ textAlign: 'left' }}>
                                    <Typography variant="h6" sx={{ color: 'rgb(26, 198, 255)', fontWeight: 'bold' }}>
                                        John Albery
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '17px' }}>
                                        California
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;