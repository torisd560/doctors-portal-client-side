import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { handleUserName, handleEmail, handlePassword, handleSignUp, error } = useAuth()
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSignUp} >
                <h3 className='text-center custom-text-primary fw-bold mt-5'>Please Sign Up</h3>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='underline'></div>
                    <div className='underline-small'></div>
                    <div className='underline'></div>
                </div>
                <div className="mb-3 my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user text-warning me-2"></i>Full Name</label>
                    <input onChange={handleUserName} type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-warning me-2"></i>Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key text-warning me-2"></i>Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn custom-bg text-white me-3">Sign Up</button>

                <p className=' mt-4 text-center '>Already have an Account? <Link to='/login'> Please Login</Link> </p>

                <p className='text-danger fw-bold text-center'>{error}</p>
            </form>
        </div>
    );
};

export default Register;