import React from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const ManageOrder = () => {
    return (
        <div className = 'my-5'>
            <h2 className = 'my-5 text-center fw-bold custom-text-primary'>Manage All Booking Orders</h2>
            <Table responsive="sm" >
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Booking</th>
                        <th>Status</th>
                        <th>Cancel booking</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td><Button variant="danger">Cancel</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;