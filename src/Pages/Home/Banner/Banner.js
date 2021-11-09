import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png'

const bannerBg = {
    backgroundImage : `url(${bg})`,
   height : '600px'
}



const Banner = () => {
    return (
        <Container style = {bannerBg} sx={{ flexGrow: 1, marginTop: '100px', p:5 }}>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'left', p: 5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 600}}>
                        Your New Smile
                        <br />
                        Starts Here
                    </Typography>
                    <Typography variant="h6" sx = {{ color: 'text.secondary', fontSize: '17px', margin: '30px 0' }}>
                        Trusted results for Jobs For Doctors In Usa. Check Visymo Search for the best results! Unlimited Access.Always Facts. Privacy Friendly.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', padding: '10px'}}>GET APPOINMENT</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" style={{ width: '500px', }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;