import React from 'react';
import { Button, Container, Grid, TextField, Typography} from '@mui/material';
import contactBg from "../../../images/appointment-bg.png"


const HomeFooter = () => {

    const homeContactBg  = {
        backgroundImage: `url(${contactBg})`,
        backgroundColor: 'rgba(0, 26, 51, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '150px'
    }

    return (
        <Grid containers spacing={2} style = {homeContactBg } >
           <Container sx = {{p : 5}}>
               <Typography variant = "h5" style = {{color :'rgb(26, 198, 255)', mt : 5}}>
                CONTACT US
               </Typography>
               <Typography variant = "h3" sx = {{color : 'whitesmoke',mt: 3, mb : 5}}>
                Always Connect With Us
               </Typography>
           <Grid item sm={12} md={12}>
                <TextField
                    sx={{ width: '50%', m: 2 , backgroundColor : 'white'}}
                    required
                    id="outlined-size-small"
                    placeholder = " Email"
                  
                />
                <TextField
                    sx={{ width: '50%', m: 2 , backgroundColor : 'white'}}
                    required
                    id="outlined-size-small"
                    placeholder = " Subject"
                />
                <TextField
                    sx={{ width: '50%', m: 2, backgroundColor : 'white'}}
                    required
                    id="outlined-size-small"
                    placeholder = " Message"
                    multiline
                    rows={4}
                />
                <br />
                 <Button variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', padding : '10px 60px', m: 2}}> SUBMIT</Button>
            </Grid>
           </Container>
        </Grid>
    );
};

export default HomeFooter;