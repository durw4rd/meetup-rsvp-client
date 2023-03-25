import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, FormControl, TableContainer, Table, TableHead, TableBody, TableRow, Modal, Typography, Box } from '@mui/material';

export default function ListUpcomingEvents() {

    const [inputValue, setInputValue] = useState("");

    // ALL THAT SHOULD NEED EDITING (FOR NOW)
    // const groupURLName = 'pick-up-basketball-amsterdam';
    const numberEvents = 12;
    
    const getUpcomingEvents = async (numberEvents) => {

        const requestBody = {
            "numberEvents": 12
        }

        axios.post('https://meetup-rsvp-server.michalfasanek2.repl.co/listEvents', {
            requestBody
        })
            .then(res => {
                console.log(`Response status: ${res.status}`);
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            })        
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log("Input value:", inputValue);
        getUpcomingEvents(numberEvents)
        // createClient(inputValue);
        setInputValue("");        
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={{minWidth: "90%"}}>
            <FormControl sx={{ marginBottom: "1em" }}>
                <form 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                    onSubmit={handleFormSubmit}
                >
                    <TextField
                        fullWidth
                        id="number-events"
                        label="Enter the number of events to list"
                        variant="filled"
                        size="small"
                        sx={{ backgroundColor: "white" }}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button 
                        type="submit"
                        variant="contained" 
                        sx={{ color: "#282C34", backgroundColor: "white" }}
                    >
                        List Events!
                    </Button>

                </form>
            </FormControl>
            
            <h3>Upcoming events</h3>
            <TableContainer sx={{ maxWidth: "100%" }}>
                <Table sx={{ }}>
                    <TableHead>
                        <TableRow>
                            <th style={{border: "1px solid white", padding: "5px"}}>Event Date</th>
                            <th style={{border: "1px solid white", padding: "5px"}}>RSVP Opens</th>
                            <th style={{border: "1px solid white", padding: "5px"}}>Available Spots</th>
                            <th style={{border: "1px solid white", padding: "5px"}}>RSVP</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        // OauthClients.map(({name, _clientId, _creationDate},index) => {
                        //     return (
                        //         <TableRow key={index}>
                        //             <td style={{border: "1px solid white", padding: "5px"}}>{name}</td>
                        //             <td style={{border: "1px solid white", padding: "5px"}}>{_clientId}</td>
                        //             <td style={{border: "1px solid white", padding: "5px"}}>{convertTimestampToDate(_creationDate)}</td>
                        //             <td style={{border: "1px solid white", padding: "5px"}}><Button variant="contained" sx={{ color: "#282C34", backgroundColor: "white" }} onClick={ () => deleteClient(_clientId) }>delete client</Button></td>
                        //         </TableRow> 
                        //     )
                        // })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

