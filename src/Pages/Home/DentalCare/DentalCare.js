import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png'
import { Box } from '@mui/system';


const DentalCare = () => {
    return (
        <Box sx = {{marginBottom : '220px' }}>
            <Grid container spacing={2} sx = {{display : 'flex', alignItems : 'center'}}>
                <Grid item xs={12} md={6}>
                    <img src={treatment} alt="" style={{ width: '450px' }} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'left', px:5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                        Exceptional Dental
                        <br /> Care On Your Terms
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', my: 5, fontSize : '17px'}}>
                        Trusted results for Dental New York. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', py: 1, px: 5 }}>Learn More</Button>
                </Grid>
            </Grid>
        </Box>

    );
};

export default DentalCare;