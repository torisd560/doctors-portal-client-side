import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/404jpg.jpg'

const NotFound = () => {
    return (
        <div className='my-5 text-center border-0'>
            <img src={notfoundImg} alt="" />
            <br />
            <Link to='/home'>
                <Button className=" bg-custom-danger border-0 mt-4">Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;