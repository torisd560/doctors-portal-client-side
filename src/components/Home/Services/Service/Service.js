import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    console.log(props)
    const { serviceName, img, description} = props.service
    return (
     <Col>
      <Card>
        <Card.Img variant="top" src={img} style ={{height : '300px'}}/>
        <Card.Body>
          <Card.Title className = 'text-center text-danger fw-bold'>{serviceName}</Card.Title>
          <Card.Text>
           {description.slice(0, 100)}.
          </Card.Text>
          <Button variant="danger">See More</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;