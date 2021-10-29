import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Tour = (props) => {
  const { title, description, img, price } = props.tour
  return (
    <Col>
      <Card className='text-center text-secondary'>
        <Card.Img variant="top" src={img} className='img-fluid' />
        <Card.Body>
          <Card.Title className='text-uppercase fw-bold custom-text-primary'>{title}</Card.Title>
          <p>{price}</p>
          <Card.Text>
            {description.slice(0, 120)}
          </Card.Text>
          <Button className='custom-btn text-uppercase'>Book Now</Button>
        </Card.Body>
      </Card>
    </Col>


  );
};

export default Tour;