import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('volunter.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <h1 className='text-uppercase text-center fw-bold custom-text-primary my-5'>Our Popular Place</h1>
            <Container className='my-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        tours.map(tour => <Tour tour={tour} key={tour.id}></Tour>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Tours;