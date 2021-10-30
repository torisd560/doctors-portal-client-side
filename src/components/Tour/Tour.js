import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
  const { _id, title, description, img, price } = props.tour
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
          <Link to={`/TourService/booking/${_id}`}>
            <Button className='custom-btn text-uppercase'>Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>


  );
};

export default Tour;