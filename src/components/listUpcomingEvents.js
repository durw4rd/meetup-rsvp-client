import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, TextField, FormControl, TableContainer, Table, TableHead, TableBody, TableRow, Modal, Typography, Box } from '@mui/material';

import { rsvpToEvent } from '../functions/eventRSVP';

export default function ListUpcomingEvents() {

    const [upcomingEvents, setupcomingEvents] = useState([]);

    // ALL THAT SHOULD NEED EDITING (FOR NOW)
    // const groupURLName = 'pick-up-basketball-amsterdam';
    // const numberEvents = 6;

    const getUpcomingEvents = async () => {

        const serverEndpoint = `https://meetup-rsvp-server.michalfasanek2.repl.co/listEvents/6`; // replit

        axios.get(serverEndpoint)
            .then(res => {
                console.log(`Response status: ${res.status}`);
                console.log(res.data);
                setupcomingEvents(res.data);
            })
            .catch(e => {
                console.log(e);
            })
    };

    useEffect(() => {
        getUpcomingEvents();
    }, []);

    // seven days in ms = 604800000

    return (
        <div style={{ minWidth: "90%", maxWidth: "100%" }}>
            <h3>Upcoming events</h3>
            <TableContainer sx={{ maxWidth: "100%" }}>
                <Table sx={{}}>
                    <TableHead>
                        <TableRow>
                            <th style={{ border: "1px solid white", padding: "5px" }}>Event Date</th>
                            <th style={{ border: "1px solid white", padding: "5px" }}>RSVP Status</th>
                            {/*               <th style={{ border: "1px solid white", padding: "5px" }}>Going</th> */}
                            <th style={{ border: "1px solid white", padding: "5px" }}>RSVP Michalaki</th>
                            <th style={{ border: "1px solid white", padding: "5px" }}>RSVP Adriko</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        upcomingEvents.map(({ eventDateHuman, eventDateObj, eventId, rsvpState, going }, index) => {
                            return (
                                <TableRow key={index}>
                                    <td style={{ border: "1px solid white", padding: "5px" }}>{eventDateHuman}</td>
                                    <td style={{border: "1px solid white", padding: "5px"}}>{rsvpState}</td>
                                    {/*                   <td style={{border: "1px solid white", padding: "5px"}}>{going}</td> */}
                                    <td style={{ border: "1px solid white", padding: "5px" }}><Button variant="contained" sx={{ color: "#282C34", backgroundColor: "white" }} onClick={() => rsvpToEvent(eventId, eventDateObj, "Michalaki", false)}>Schedule RSVP!</Button></td>
                                    <td style={{ border: "1px solid white", padding: "5px" }}><Button variant="contained" sx={{ color: "#282C34", backgroundColor: "white" }} onClick={() => rsvpToEvent(eventId, eventDateObj, "Adriko", false)}>Schedule RSVP!</Button></td>
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
