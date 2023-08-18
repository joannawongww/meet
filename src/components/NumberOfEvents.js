import React from "react";

const NumberOfEvents = ( {eventNumber, onEventNumberChange }) => {
    const handleInputChanged = (value) => {
        onEventNumberChange(value)
    }
    
    return (
        <div id="number-of-events">
            <b>Number of Events: </b>
            <input 
            type= "text"
            defaultValue="32"
            className="textbox"
            placeholder="Enter a number"
            value={eventNumber}
            onChange={(e) => handleInputChanged(e.target.value)}
            />
        </div>
    )
}

export default NumberOfEvents;