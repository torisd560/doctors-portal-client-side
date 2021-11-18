import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, Alert } from '@mui/material';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: "1",
        name: "Teeth Orthondotics",
        time: "8:00 AM-9:00 AM",
        price: 24,
        space: "10 SPACE AVAILAVLE"
    },
    {
        id: "2",
        name: "Cosmetic Dentistry",
        time: "10:05 AM-11:30 AM",
        price: 14,
        space: "10 SPACE AVAILAVLE"
    },
    {
        id: "3",
        name: "Teeth Cleaning",
        time: "5:00 PM-6:30 PM",
        price: 45,
        space: "10 SPACE AVAILAVLE"
    },
    {
        id: "4",
        name: "Cavity Protection",
        time: "7:00 AM-8:00 AM",
        price: 20,
        space: "10 SPACE AVAILAVLE"
    },
    {
        id: "5",
        name: "Teath Filling",
        time: "8:00 AM-9:00 AM",
        price: 22,
        space: "10 SPACE AVAILAVLE"
    },
    {
        id: "6",
        name: "Oral Surgery",
        time: "8:00 AM-9:00 AM",
        price: 25,
        space: "10 SPACE AVAILAVLE"
    },
]

const AvailableApointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <div>

            <Container >
                <Typography variant="h3" sx={{ color: 'rgb(26, 198, 255)' }}>
                    Available Appoinments On  {date.toDateString()}
                </Typography>
                {bookingSuccess && <Alert severity="success" sx={{ m: 8, mb: 0 }}>Congralutations! Appointment Booked succesfully</Alert>}
                <Grid container spacing={2} >
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default AvailableApointment;