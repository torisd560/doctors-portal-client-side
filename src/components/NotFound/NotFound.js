import React from 'react';
import { Button} from 'react-bootstrap';
import NotFoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div className = 'text-center'>
            <img src={NotFoundImg} alt="" />
            <br />
            <Button className='custom-btn rounded-0 my-4'>Back To Home<i class="fas fa-long-arrow-alt-right ms-3"></i></Button>
        </div>
    );
};

export default NotFound;