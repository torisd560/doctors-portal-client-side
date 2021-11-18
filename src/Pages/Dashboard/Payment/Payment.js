import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw16EEnFbnRQT98ptA9fRKcmkyXkhozws9H4KDmmkCw64nVdNmIw6DDQziYdRPjlcCPPWB7dgQ6a0ZzKyZE1zBO00YjAQyUWl')

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);

    return (
        <div>
            <h1>Pay For : {appointment.patientName}</h1>
            <Grid item xs={12} sm={12} md={6} style={{ marginTop: '100px', marginBottom: '100px' }}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h4" style={{ color: 'rgb(26, 198, 255)' }}>
                        {appointment.serviceName}
                    </Typography>
                    <Typography variant="h5" style={{ margin: '10px 0', fontWeight: 600 }}>
                        {appointment.time}
                    </Typography>
                    <Typography variant="h6" style={{ margin: '10px 0', fontWeight: 600 }}>
                        $ {appointment.price}
                    </Typography>
                    <Typography variant="h6" style={{ fontSize: '15px', color: 'gray' }}>
                        {appointment.space}
                    </Typography>
                    {/* <Button  variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', padding: '10px', mt: 3 }}>BOOK APOINTMENT</Button> */}
                </Paper>
            </Grid>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;
/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/