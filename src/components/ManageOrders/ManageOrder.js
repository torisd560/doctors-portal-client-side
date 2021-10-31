import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import useAuth from '../../hooks/useAuth'

const ManageOrder = () => {
    const [orders, setOrders] = useState([])

    const {isLoading} = useAuth()

    useEffect(() => {
        fetch('https://whispering-dusk-80653.herokuapp.com/TourService/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    if(isLoading) {
        return <div className = 'text-center my-5'><Spinner animation="border" variant="warning" /></div>
    } 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://whispering-dusk-80653.herokuapp.com/TourService/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Delete Booking Successfully')
                        const restBooking = orders.filter(order => order._id !== id)
                        setOrders(restBooking)
                    }
                })
        }
    }
    //============update===============
    const data = {
        status: "Aprove"
    }
    const hanldeUpdate = id => {
        console.log(id)
        fetch(`https://whispering-dusk-80653.herokuapp.com/TourService/booking/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='my-5'>
            <h2 className='my-5 text-center fw-bold custom-text-primary'>Manage All Booking Orders</h2>
            <Table responsive="sm" >
                <thead >
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Cancel booking</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <tr>
                            <td>{order?._id}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.Country}</td>
                            <td><Button onClick={() => handleDelete(order._id)} variant="danger"><i className="far fa-window-close me-2"></i>Cancel</Button></td>
                            <td><Badge bg="warning" text="dark" className="p-2">{order?.status}</Badge>
                                <Button variant="outline-light"><i onClick={() => hanldeUpdate(order._id)} className="fas fa-check-circle m-2 fs-5 custom-text-primary"></i></Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;