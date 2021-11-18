import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Doctor from './Doctor/Doctor';



const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Container sx={{ marginTop: '100px', mb: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'rgb(26, 198, 255)', my: 5 }}>
                Our Doctors
            </Typography>

            <Grid container spacing={2}>
                {
                    doctors.map(doctor => <Doctor doctor = {doctor} key = {doctor._id}></Doctor>)
                }
            </Grid>

        </Container>
    );
};

export default Doctors;