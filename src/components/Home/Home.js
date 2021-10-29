import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import Tours from '../TourPlace/Tours';
import Article from './Article/Article';
import './Home.css'
import Pricing from './Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Carousel fade className='text-uppercase fw-bold mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 className='custom-text-warning'>Welcome to Travenu</h4>
                        <h1>Best Way To Find Your
                            <br /> Dream Place</h1>
                        <Button className='custom-btn'>Discover Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4 className='custom-text-warning'>Welcome to Travenu</h4>
                        <h1>Best Way To Find Your
                            <br /> Dream Place</h1>
                        <Button className='custom-btn'>Discover Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4 className='custom-text-warning'>Welcome to Travenu</h4>
                        <h1>Best Way To Find Your
                            <br /> Dream Place</h1>
                        <Button className='custom-btn'>Discover Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Tours></Tours>
                <Article></Article>
                <Pricing></Pricing>
            </div>
        </div>
    );
};

export default Home;