import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div>
            <div className='my-5 mx-auto w-50'>
                <form >
                    <h3 className='text-center custom-text-primary fw-bold my-3'>Please Sign In</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='underline'></div>
                        <div className='underline-small'></div>
                        <div className='underline'></div>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                        <input  type="password" className="form-control" />
                    </div>

                    <div>
                        <p className='custom-cursor-style text-primary'> Forgot Password ? </p>
                        <button type="submit" className="btn custom-bg text-white me-3 px-4 mt-2">Login</button>
                        <Button  variant="warning" className='me-3 mt-2'><i className="fab fa-google text-white fs-5 px-4 "></i></Button>
                        <Link to='/register'> <p className='custom-cursor-style text-primary mt-4'>Create an  new account?</p></Link>
                        <p className='text-danger fw-bold mt-4'></p>
                    </div>

                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;