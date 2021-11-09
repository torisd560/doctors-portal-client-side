import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import loginImage from '../../../images/login.png'
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, handleRegister } = useAuth()

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('Password not match')
            return
        }
        handleRegister(loginData.email, loginData.password, loginData.name, history)

    }
    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ color: 'text.secondary', mb: 3 }}>
                        Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Retype Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard"
                        />
                        <Button type="submit" sx={{ width: '75%', m: 5, backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', py: 1, px: 5 }} variant="contained">Register</Button>
                        <NavLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>
                    {user.email && <Alert severity="success" sx={{ mx: 8 }}>Congralutations! Your are login succesfully</Alert>}
                    {error && <Alert severity="error" sx={{ mx: 8 }}>{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} alt="" style={{ width: '500px' }} />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Register;