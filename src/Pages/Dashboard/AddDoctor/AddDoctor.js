import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleOnsubmit = e => {
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctors added succesfully')

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        e.preventDefault()

    }

    return (
        <div>
            <h2>Add an Doctoer</h2>
            <form onSubmit={handleOnsubmit}>
                <TextField
                    sx={{ width: '50%', mt: 3 }}
                    label="Name"
                    variant="standard"
                    required
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    sx={{ width: '50%', mt: 3 }}
                    label="Email"
                    variant="standard"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <Input accept="image/*"
                    type="file"
                    sx={{ width: '50%', mt: 3 }}
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button variant="contained" type="submit" sx={{ mt: 3 }}>
                    Add Doctor
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;