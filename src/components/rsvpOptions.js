import React, { useState } from 'react';
import { Button, FormGroup, FormControlLabel, Switch } from '@mui/material';

function RsvpOptions() {
    const [buttonMichSelected, setButtonMichSelected] = useState(false);
    const [buttonAdrSelected, setButtonAdrSelected] = useState(false);
    const [plusOne, setPlusOne] = useState(false);

    const handleCheckboxChange = (e) => {
        setPlusOne(e.target.checked);

        console.log(plusOne);
    };

    const handleButtonClick = (name) => {
        if (name === 'Mich') {
          setButtonMichSelected(!buttonMichSelected);
        } else if (name === 'Adr') {
          setButtonAdrSelected(!buttonAdrSelected);
        }
    };

    return (
        <div>
            <p>Select the user and if you want a plus one</p>
            <Button variant="contained" sx={{ color: "#282C34", backgroundColor: buttonMichSelected ? "#1565C0" : "white" }} onClick={() => handleButtonClick('Mich')} >Michalaki</Button>
            <Button variant="contained" sx={{ color: "#282C34", backgroundColor: buttonAdrSelected ? "#1565C0" : "white" }} onClick={() => handleButtonClick('Adr')} >Adriko</Button>
            {/* <input type="checkbox" checked={plusOne} onChange={handleCheckboxChange} /> */}
            <FormGroup>
                <FormControlLabel control={<Switch checked={plusOne} onChange={handleCheckboxChange} />} label="Plus one?" />
            </FormGroup>
            
            
        </div>
    );
}

export default RsvpOptions;
