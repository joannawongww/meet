import mockData from './mock-data';

// takes an event array, uses map to create new array with only locations
// remove all duplicates by creating another new array using spread operator
// set remove all duplicates from array
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location)
    const locations = [...new Set(extractedLocations)];
    return locations;
}

// fetch list of all events
export const getEvents = async () => {
    return mockData;
}