import React from 'react';
import { Carousel , Button } from 'react-bootstrap';
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'

const Banner = () => {
    return (
        <div>
             <>
                <Carousel className = 'my-3'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className='text-uppercase fw-bold'>Female<span className='text-danger'> care</span></h1>
                            <p>Welcome to Female Health Care Without Harm! Please join us as we work to transform the health sector worldwide, promoting environmental health and justice</p>
                            <Button variant="danger" className='text-uppercase'>Our Services</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 className='text-uppercase fw-bold'>Trusted <span className='text-danger'>Gynecologists</span></h1>
                            <p>A gynecologist treats patients with female reproductive organs, whether or not they identify as women. An obstetrician is a kind of gynecologist who specializes ...</p>
                            <Button variant="danger" className='text-uppercase'>Our Doctors</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;