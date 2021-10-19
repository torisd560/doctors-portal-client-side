import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    let {serviceId} = useParams()
    const [servicesDetail , setServicesDetail] = useState([])
    
    useEffect(()=>{
        fetch('../services.json')
        .then(res => res.json())
        .then(data =>setServicesDetail(data))
    } ,[])

    const service = servicesDetail.filter(sd=>sd.id===serviceId)
    console.log(service)

    return (
        <div>
            <h1> service detail{serviceId}</h1>
            <h1>{service?.name}</h1>
        </div>
    );
};

export default ServiceDetail;