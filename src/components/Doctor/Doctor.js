import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, title, img } = props.doctor
    return (
        <Col>
            <Card className='text-center border border-1 border-secondary'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-custom-danger fw-bold'>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;