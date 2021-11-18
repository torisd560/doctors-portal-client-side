import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Doctor = (props) => {
    const { name, email, image } = props.doctor

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} >
                <img src={`data:image/png;base64,${image}`} alt="" style ={{width : '250px'}} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '15px' }}>
                    {email}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Doctor;