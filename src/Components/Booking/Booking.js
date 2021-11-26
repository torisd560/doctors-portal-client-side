import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
  const [service, setService] = useState({})
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams()
  const { user, isLoading } = useAuth()

  const onSubmit = data => {
    fetch('https://whispering-dusk-80653.herokuapp.com/TourService/booking', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Booking Succesfull')
        }
      })
    reset()
  };

  useEffect(() => {
    fetch(`https://whispering-dusk-80653.herokuapp.com/TourService/booking/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  if (isLoading) {
    return <div className='text-center my-5'><Spinner animation="border" variant="warning" /></div>
  }

  return (
    <Container>
      <Row xs={1} md={2} className='my-5 '>
        <Col>
          <Card className='text-center text-secondary'>
            <Card.Img variant="top" src={service?.img} className='img-fluid' />
            <Card.Body>
              <Card.Title className='text-uppercase fw-bold custom-text-primary'>{service?.title}</Card.Title>
              <p>{service?.price}</p>
              <Card.Text>
                {service?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div className='shadow-lg p-3'>
            <form onSubmit={handleSubmit(onSubmit)} className='booking-field h-75'>
              {
                service.title && <input
                  defaultValue={service.title}
                  {...register("Country")}
                  requred
                />

              }
              <input
                value={user?.displayName}
                type="text" {...register("name")}
                placeholder='Name'
                requred
              />
              <input
                value={user.email}
                type="email" {...register("email")}
                placeholder='Email'
                requred
              />
              <input
                type="number" {...register("phone")}
                placeholder='Cell Phone'
                requred
              />
              <input
                type="date" {...register("date")}
                placeholder='Date'
                requred
              />
              <input
                type="number" {...register("number")}
                placeholder='Tickets Number'
                requred
              />
              <input
                defaultValue="Pending" {...register("status")}
                requred
              />
              <input
                type="submit"
                className='custom-btn rounded-0 text-uppercase text-white mt-3'
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;