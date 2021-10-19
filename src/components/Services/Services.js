import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className='mb-5 text-center  '>
            <h1 className='fw-bold text-custom-secondary mt-5' id='services'>Our Services</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='underline'></div>
                <div className='underline-small'></div>
                <div className='underline'></div>
            </div>
            <p className='text-secondary text-center mt-5'>Doctors HealthCare Plans, Inc. is an HMO with a Medicare contract.Doctors' Health Fund is a registered private health insurance provider for doctors & the medical community. Contact us to get your health covered!</p>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;