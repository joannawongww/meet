import React from "react";

const NumberOfEvents = ( { setCurrentNOE }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value)
    }
    
    return (
        <div id="number-of-events">
            <b>Number of Events: </b>
            <input 
            type= "text"
            defaultValue="32"
            className="textbox"
            placeholder="Enter a number"
            onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;