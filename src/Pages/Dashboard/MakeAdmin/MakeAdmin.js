import { Button, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token} = useAuth()
    const user = { email }
    const handleEmail = e => {
        setEmail(e.target.value)
        e.target.value = ""
    }

    const handleSubmit = e => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setSuccess(true))
        e.preventDefault()
    }

    return (
        <div>
            {success && <Alert severity="success" sx={{ m: 8 }}>Congralutations! Admin made succesfully</Alert>}
            <Typography variant="h5" sx={{ mb: 5 }}>
                Make An Admin
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleEmail}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;