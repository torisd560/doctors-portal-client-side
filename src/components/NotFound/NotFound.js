import React from 'react';
import { Button } from 'react-bootstrap';
import notfoundImg from '../../images/404jpg.jpg'

const NotFound = () => {
    return (
        <div className ='my-5 text-center border-0'>
           <img src={notfoundImg} alt="" />
           <br />
           <Button className=" bg-custom-danger border-0 mt-4">Back To Home</Button>
        </div>
    );
};

export default NotFound;