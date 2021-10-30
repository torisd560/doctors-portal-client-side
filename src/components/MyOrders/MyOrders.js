import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import useAuth from '../../hooks/useAuth'

const MyOrders = () => {
        const {user} = useAuth()

        const [orders, setOrders] = useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/TourService/booking')
            .then(res =>res.json())
            .then( data => setOrders(data))
        },[])
    
        const handleDelete = id =>{
            fetch(`http://localhost:5000/TourService/booking/${id}`, {
                method : 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                    if(data.acknowledged){
                        const restBooking = orders.filter(order=> order._id === id)
                        setOrders(restBooking)
                        alert('Delete Booking Successfully')
                    }
            })
        }
        
    
        return (
            <div className = 'my-5'>
                <h2 className = 'my-5 text-center fw-bold custom-text-primary'>Manage All Booking Orders</h2>
                <Table responsive="sm" >
                    <thead >
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Booking</th>
                            <th>Cancel booking</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orders.map(order => order.email === user.email &&
                            <tr>
                            <td>{order._id}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.Country}</td>
                            <td><Button onClick = {()=> handleDelete(order._id)} variant="danger">Cancel</Button></td>
                            <td>{order.status}</td>
                            </tr>
                            )
                            
                         }
                    </tbody>
                </Table>
            </div>
    );
};

export default MyOrders;