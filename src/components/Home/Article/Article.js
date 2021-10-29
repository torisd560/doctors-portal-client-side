import React from 'react';
import { Button, Container } from 'react-bootstrap';
import bannerImg from '../../../images/homeMiddleBanner.jpg'
import './Article.css'

const Article = () => {
    return (
       <section className = ' article-container'>
            <Container className='text-secondary'>
            <h2 className='custom-text-primary fw-bold'>Tips & Articles</h2>
            <p  className = 'lh-lg'>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip</p>
            <div className="row mt-2 g-5">
                <div className="col-md-7 shadow-lg p-4 rounded-3 ">
                    <div className='banner-img'>
                    <img src={bannerImg} alt="" className='img-fluid rounded-3 ' />
                    </div>
                    <p className='custom-text-warning mt-3 '>Stories | Tips</p>
                    <h3 className='custom-text-primary fw-bold '>Travel Stories for Now and the Future</h3>
                    <p  className = 'lh-lg'>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae.</p>
                    <Button className='custom-btn text-uppercase'>Read More</Button>
                </div>
                <div className="col-md-5 g-5">
                    <div className="row shadow-lg p-4 rounded-3">
                            <p className='custom-text-warning mt-3 '>Destinations | Travel</p>
                            <h3 className='custom-text-primary fw-bold '>9 Popular Travel Destinations on Sale in 2020</h3>
                            <div className='underline-small ms-2 my-3'></div>
                            <p className = 'lh-lg'>Travel dates back to antiquity where wealthy such as Pompeii and Baiae.</p>
                            <Button className='custom-btn text-uppercase w-50'>Read More</Button>
                    </div>
                    <div className="row shadow-lg p-4 mt-4 rounded-3">
                            <p className='custom-text-warning mt-3 '>Tips | Travel</p>
                            <h3 className='custom-text-primary fw-bold '>How Are We Going to Travel in 2021?</h3>
                            <div className='underline-small ms-2 my-3'></div>
                            <p className = 'lh-lg'>Travel dates back to antiquity where wealthy Greeks and Romans would such as Pompeii and Baiae.</p>
                            <Button className='custom-btn text-uppercase w-50'>Read More</Button>
                    </div>

                </div> 
            </div>
        </Container>
       </section>
    );
};

export default Article;