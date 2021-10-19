import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const [toggle, setToggle] = useState(false)

    const { handleGoogleSignIn, handleGithubSignIn, handleEmail, handlePassword, handleLogin,handleSignUp, resetPassword, handleNameChange, error } = useFirebase()
    return (
        <div>
            {toggle ? <div className='my-5 mx-auto w-50'>
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
                :
                <div className='w-50 mx-auto'>
                    <form onSubmit={handleSignUp}>
                        <h3 className='text-center text-custom-secondary fw-bold mt-5'>Please Sign Up</h3>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='underline'></div>
                            <div className='underline-small'></div>
                            <div className='underline'></div>
                        </div>
                        <div className="mb-3 my-5">
                            <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user text-warning me-2"></i>Full Name</label>
                            <input onChange={handleNameChange} type="text" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-warning me-2"></i>Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key text-warning me-2"></i>Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" />
                        </div>
                        <button type="submit" className="btn bg-custom-danger text-white me-3">Sign Up</button>
                        <p className='text-danger fw-bold text-center'>{error}</p>
                    </form>
                </div>}
            <div className='mt-4 text-center text-primary '>
                { toggle? <p onClick={() => setToggle(false)} className='custom-cursor-style'>Create an  new account?</p>
                    :
                    <p onClick={() => setToggle(true)} className='custom-cursor-style'>Already have an Account? Please Login</p>}
            </div>
        </div>
    );
};

export default Login;