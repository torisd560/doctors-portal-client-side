import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container>
            <h1 className='text-center text-custom-secondary mt-5 fw-bold' id='doctors'>Our Doctors</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='underline'></div>
                <div className='underline-small'></div>
                <div className='underline'></div>
            </div>
            <p className='text-secondary text-center mt-5'>Doctors HealthCare Plans, Inc. is an HMO with a Medicare contract.Doctors' Health Fund is a registered private health insurance provider for doctors & the medical community. Contact us to get your health covered!</p>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;