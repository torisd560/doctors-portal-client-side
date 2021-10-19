import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let { serviceId } = useParams()
    const [servicesDetail, setServicesDetail] = useState([])
    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServicesDetail(data))
    }, [])


    useEffect(() => {
        const foundDetail = servicesDetail.find(sd => sd.id === serviceId)
        setDetail(foundDetail)
    }, [servicesDetail])


    return (

        <Col className='my-5 p-5'>
            <Card className='w-50 mx-auto text-center '>
                <Card.Img variant="top" className='img-fluid mx-auto' src={detail?.img} />
                <Card.Body>
                    <Card.Title className='text-custom-danger fw-bold'>{detail?.serviceName}</Card.Title>
                    <Card.Text>
                        {detail?.description}.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default ServiceDetail;