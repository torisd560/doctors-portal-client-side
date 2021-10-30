import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleLogin, handleGoogleSignIn, handleEmail, handlePassword, resetPassword, error } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        handleGoogleSignIn()
            .then(() => history.push(redirect_url))
    }
    return (
        <div>
            <div className='my-5 mx-auto w-50'>
                <form onSubmit={handleLogin} >
                    <h3 className='text-center custom-text-primary fw-bold my-3'>Please Sign In</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='underline'></div>
                        <div className='underline-small'></div>
                        <div className='underline'></div>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                        <input onBlur={handleEmail} type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" />
                    </div>

                    <div>
                        <p onClick={resetPassword} className='custom-cursor-style text-primary'> Forgot Password ? </p>
                        <button type="submit" className="btn custom-bg text-white me-3 px-4 mt-2">Login</button>
                        <Button onClick={handleGoogleLogin} variant="warning" className='me-3 mt-2'><i className="fab fa-google text-white fs-5 px-4 "></i></Button>
                        <Link to='/register'> <p className='custom-cursor-style text-primary mt-4'>Create an  new account?</p></Link>
                        <p className='text-danger fw-bold mt-4'>{error}</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;