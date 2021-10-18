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
          <Card.Title className = 'text-center text-custom-danger fw-bold'>{serviceName}</Card.Title>
          <Card.Text>
           {description.slice(0, 100)}.
          </Card.Text>
          <Button className="bg-custom-danger border-0">See More</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;