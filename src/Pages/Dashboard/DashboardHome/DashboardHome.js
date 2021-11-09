import React from 'react';
import Grid from '@mui/material/Grid';
import Calender from '../../Shared/Calender/Calender'
import DashboardAppointments from '../DashboardAppointments/DashboardAppointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md = {5}>
            <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md ={7}>
            <DashboardAppointments date={date}></DashboardAppointments>
        </Grid>

    </Grid>
    );
};

export default DashboardHome;