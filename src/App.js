import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { extractLocations, getEvents } from './api'

import './App.css';


function App() {
    const [events, setEvents] = useState([]);
    const [currentNOE, setCurrentNOE] = useState(32);
    const [allLocations, setAllLocations] = useState([]);
    const [currentCity, setCurrentCity] = useState('See all cities')

    
    useEffect(() => {
        fetchData();
    }, [currentCity, currentNOE]);

    // populate event 
    const fetchData = async () => {
        const allEvents = await getEvents();
        const filteredEvents = currentCity === 'See all cities' ? allEvents :
            allEvents.filter(event => event.location === currentCity)

        setEvents(filteredEvents.slice(0, currentNOE))
        setAllLocations(extractLocations(allEvents))
    }



  return (
    <div className="App">
       <h1 className="title">meet.</h1>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
      <EventList events={events}/>
    </div>
  );
}

export default App;
