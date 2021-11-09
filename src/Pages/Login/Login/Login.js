import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import loginImage from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, signInWithGoogle, handleLogin } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        handleLogin(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ color: 'text.secondary', mb: 3 }}>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleOnchange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1, py: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnchange}
                            type="password"
                            variant="standard"
                        />
                        <Button type="submit" sx={{ width: '75%', m: 5, backgroundColor: 'rgb(26, 198, 266)', color: 'rgb(242, 242, 242)', py: 1, px: 5 }} variant="contained">Login</Button>
                        <NavLink to='/register' style={{ textDecoration: 'none' }}>
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                        {user.email && <Alert severity="success" sx={{ mx: 8 }}>Congralutations! Your are login succesfully</Alert>}
                        {error && <Alert severity="error" sx={{ mx: 8 }}>{error}</Alert>}
                    </form>
                    <Button onClick = {handleGoogleSignIn} variant = "contained">Google SignIn</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} alt="" style={{ width: '500px' }} />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Login;