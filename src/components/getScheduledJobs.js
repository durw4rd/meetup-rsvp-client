import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material';

export default function ListScheduledJobs() {
    const [scheduledJobs, setScheduledJobs] = useState([]);

    const getScheduledJobs = async () => {

        const serverEndpoint = `https://meetup-rsvp-server.michalfasanek2.repl.co/pendingJobs`; // replit

        axios.get(serverEndpoint)
            .then(res => {
                console.log(`Response status: ${res.status}`);
                console.log(res.data.jobs);
                setScheduledJobs(res.data.jobs);
            })
            .catch(e => {
                console.log(e);
            })
    };

    useEffect(() => {
        getScheduledJobs();
    }, []);

    return (
        <div style={{ minWidth: "90%", maxWidth: "100%" }}>
            <h3>Scheduled jobs</h3>
            <TableContainer sx={{ maxWidth: "100%" }}>
                <Table sx={{}}>
                    <TableHead>
                        <TableRow>
                            <th style={{ border: "1px solid white", padding: "5px" }}>Job Name</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        scheduledJobs.map((job, index) => {
                            return (
                                <TableRow key={index}>
                                    <td style={{ border: "1px solid white", padding: "5px" }}>{job}</td>
                                </TableRow>
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}