import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';



    const ApointmentHeader = ({date, setDate}) => {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md = {6}>
                    <Calender date = {date} setDate = {setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md ={6}>
                        <img src={chair} alt="" style={{ width: '500px' }} />
                    </Grid>
                </Grid>
            </Container>
        );
    };

    export default ApointmentHeader;