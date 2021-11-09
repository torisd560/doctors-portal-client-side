import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ handleModalClose, openModal, booking, date, setBookingSuccess }) => {
    const { name, time } = booking
    const { user } = useAuth()

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleModalClose()
                }
            })
        e.preventDefault()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mb: 5, textAlign: 'center', color: 'rgb(26, 198, 255)' }}>
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toLocaleDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained" sx={{ backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', padding: '5px 20px', m: 1 }}>SUBMIT</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;