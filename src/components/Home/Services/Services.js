import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const { services} = useServices()
    return (
        <div>
            <h1 className = 'text-center text-secondary mt-5'>Our Services</h1>
            <div className = 'd-flex justify-content-center align-items-center'>
            <div className = 'underline'></div>
            <div className = 'underline-small'></div>
            <div className = 'underline'></div>
            </div>
            <Row xs={1} md={3} className="g-4 my-5">
            {
                services.map(service =><Service service ={service} key = {service.id}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;