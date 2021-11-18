import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal'

const Booking = ({ booking, date , setBookingSuccess}) => {
    const { name, time, space, price } = booking
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} style={{ marginTop: '100px' }}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h4" style={{ color: 'rgb(26, 198, 255)' }}>
                        {name}
                    </Typography>
                    <Typography variant="h5" style={{ margin: '10px 0', fontWeight: 600 }}>
                        {time}
                    </Typography>
                    <Typography variant="h6" style={{ margin: '10px 0', fontWeight: 600 }}>
                       $ {price}
                    </Typography>
                    <Typography variant="h6" style={{ fontSize: '15px', color: 'gray' }}>
                        {space}
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', padding: '10px', mt: 3 }}>BOOK APOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openModal={openModal}
                handleModalClose={handleModalClose}
                setBookingSuccess = {setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;