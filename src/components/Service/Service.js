import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { id, serviceName, img, description } = props.service
  return (
    <Col>
      <Card className=' border border-1 border-secondary'>
        <Card.Img variant="top" src={img} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title className='text-center text-custom-danger fw-bold'>{serviceName}</Card.Title>
          <Card.Text>
            {description.slice(0, 100)}.
          </Card.Text>
          <Link to={`/service/${id}`}>
            <Button className="bg-custom-danger border-0">See More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;