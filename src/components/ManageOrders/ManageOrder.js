import React from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const ManageOrder = () => {
    return (
        <div>
            <h2 className = 'my-5 text-center'>Manage All Orders</h2>
            <Table responsive="sm" >
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Cancel Orders</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td><Button variant="danger">Cancel</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td><Button variant="danger">Cancel</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
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