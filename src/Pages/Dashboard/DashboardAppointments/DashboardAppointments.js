import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth'
import { Box } from '@mui/system';

const DashboardAppointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date])

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ mb: 8, fontSize: '17px', fontWeight: 'bold', color: 'rgb(26, 198, 255)' }}>
                    Appointments {appointments.length}
                </Typography>
                <Typography variant="h6" sx={{ mb: 8, fontSize: '15px', color: 'text.secondary' }}>
                    {date.toDateString()}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow  >
                            <TableCell sx={{ color: 'text.secondary', fontWeight: 'bold', fontSize: '17px' }}>Name</TableCell>
                            <TableCell align="center" sx={{ color: 'text.secondary', fontWeight: 'bold', fontSize: '17px' }}>Service</TableCell>
                            <TableCell align="center" sx={{ color: 'text.secondary', fontWeight: 'bold', fontSize: '17px' }}>Time</TableCell>
                            <TableCell align="center" sx={{ color: 'text.secondary', fontWeight: 'bold', fontSize: '17px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashboardAppointments;