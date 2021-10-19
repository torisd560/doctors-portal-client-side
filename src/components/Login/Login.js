import React from 'react';
import { Button } from 'react-bootstrap';
import { Link , useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn, handleGithubSignIn, handleEmail, handlePassword, handleLogin, resetPassword, error,} = useAuth()
    const location = useLocation()
    return (
        <div>
            <div className='my-5 mx-auto w-50'>
                <form onSubmit={handleLogin}>
                    <h3 className='text-center text-custom-secondary fw-bold my-3'>Please Sign In</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='underline'></div>
                        <div className='underline-small'></div>
                        <div className='underline'></div>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-custom-danger me-2"></i>E-mail</label>
                        <input onBlur={handleEmail} type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key text-custom-danger me-2"></i>Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" />
                    </div>

                    <div>
                        <button type="submit" className="btn bg-custom-danger text-white me-3 px-4 mt-3">Login</button>
                        <span className='custom-cursor-style text-primary' onClick={resetPassword}> Forgot Password ? </span>
                        <p className='text-danger fw-bold mt-4'>{error}</p>
                    </div>

                </form>
                <div>
                    <p className='my-4 text-custom-secondary fw-bold'>---------Or Sign In With--------</p>
                    <Button onClick={handleGoogleSignIn} variant="warning" className='me-3'><i className="fab fa-google text-white fs-3 px-5"></i></Button>
                    <Button onClick={handleGithubSignIn} variant="secondary"><i className="fab fa-github text-white fs-3 px-5"></i></Button>
                </div>

            </div>
            <div className='mt-4 text-center text-primary '>
                <Link to='/register'> <p className='custom-cursor-style'>Create an  new account?</p></Link>
            </div>
        </div>
    );
};

export default Login;