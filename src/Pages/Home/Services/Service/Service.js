import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';



const Service = (props) => {
    const { name, description, img } = props.service
   
    return (
        <Grid item xs={2} sm={4} md={4} sx = {{mt : 2}}>
            <React.Fragment>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '70px', margin: '0 auto' }}
                    image={img}
                    alt="Doctor services"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mt : 2,  mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </React.Fragment>
        </Grid>
    );
};

export default Service;