import { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { getEvents } from './api'

import './App.css';


function App() {
    const [events, setEvents] = useState([]);
    const [currentNOE, setCurrentNOE] = useState(32);

    // populate event 
    const fetchData = async() => {
        const allEvents = await getEvents();
        setEvents(allEvents.slice(0, currentNOE))
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="App">
      <CitySearch />
      <EventList events={events}/>
      <NumberOfEvents />
    </div>
  );
}

export default App;
