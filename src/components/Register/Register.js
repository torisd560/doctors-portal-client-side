import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 mx-auto'>
        <form >
            <h3 className='text-center custom-text-primary fw-bold mt-5'>Please Sign Up</h3>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='underline'></div>
                <div className='underline-small'></div>
                <div className='underline'></div>
            </div>
            <div className="mb-3 my-5">
                <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user text-warning me-2"></i>Full Name</label>
                <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square text-warning me-2"></i>Email</label>
                <input  type="email" className="form-control" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key text-warning me-2"></i>Password</label>
                <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn custom-bg text-white me-3">Sign Up</button>
            <Link to ='/login'>
                <p className='custom-cursor-style mt-4 text-center text-primary '>Already have an Account?  Please Login </p>
            </Link>
            <p className='text-danger fw-bold text-center'></p>
        </form>
    </div>
    );
};

export default Register;