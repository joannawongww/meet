# Meet App  

Link to the app: https://joannawongww.github.io/meet/ 

## Project description

Building a serverless, progressive web application with React using TDD technique.  
App will allow users to see a list of events hosted in various cities.

Can use serverless functions for real-time data processing, user authentication, event notifications.  
App able to scale resources according to user demand.  
Serverless: Easy to scale, cost-effective (no cost for idle time), always available and no backend maintenance required.

# Technologies used  

* Google Calendar API  
* React
* React Testing Library
* BDD
* Lighthouse
* TDD  
* OAuth2  
* Recharts
* Jest
* Jest-cucumber
* Puppeteer

## Get project running using terminal
App is hosted on gh-pages.  

**Note to replace [PROJECT_FOLDER_NAME] with the name you want**  

Clone git repository:  
`git clone https://github.com/joannawongww/meet.git [PROJECT_FOLDER_NAME]`  
`cd [PROJECT_FOLDER_NAME]`
`npm i` 
  
Run app on localhost:  
`cd [PROJECT_FOLDER_NAME]`
`npm run start`  
  
Run test:    
`cd [PROJECT_FOLDER_NAME]`  
`npm run start`  

## Features of app

1. Filter events by city
2. Show/Hide event details
3. Specify number of events
4. Use the app when offline
5. Add an app shortcut to Home Screen
6. Display charts visualizing event details

# User stories & Scenarios

## Feature 1: Filter Events by City

As a user, I should be able to filter events by city so that I can see the list of events hosted in that city  
Scenario 1: User hasn't searched for any city, app to show upcoming events from all cities  
GIVEN: User has not searched any city  
WHEN: User opens app  
THEN: User should see list of upcoming events

Scenario 2: User should see list of suggestions when they search for a city  
GIVEN: User at home page  
WHEN: User starts typing in city textbox  
THEN: User should see list of suggested cities that matches what User typed

Scenario 3: User selects a city from suggested list  
GIVEN: User typed a city and suggested cities list showing  
WHEN: User selects a city  
THEN: User should see a list of upcoming events in that city

## Feature 2: Show/Hide Event details

As a user, I should be able to show/hide details of event so that I can see the details of the event I am interested in  
Scenario 1: An event element is collapsed by default  
GIVEN: User is at home page  
WHEN: User opens the app  
THEN: Users should see a list of events with details collapsed

Scenario 2: User can expand an event to see details  
GIVEN: User is at home page  
WHEN: User click on 'show details' button  
THEN: User should see the event details expanded

Scenario 3: User can collapse an event to hide details  
GIVEN: event details are expanded after user clicked 'show details'  
WHEN: the user click 'hide details' button  
THEN: the user should see the event details collapsed

## Feature 3: Specify number of events

As a user, I should be able to specify number of events to show in app so that I can control number of events being displayed  
Scenario 1: User hasn't specified a number, 32 events are shown by default  
GIVEN: User at main page  
WHEN: User did not specify number of events to be displayed  
THEN: User should see 32 events displayed

Scenario 2: User can change number of events displayed  
GIVEN: User at home page  
WHEN: User input specific number of events to be displayed  
THEN: User should see specified number of events being displayed

## Feature 4: Use the app when offline

As a user, I should be able to use the app when offline so that I can see event details without internet connection  
Scenario 1: Show cached data when there's no internet connection  
GIVEN: User has no internet connection  
WHEN: User opens app without internet connection  
THEN: User should be able to see cached data of events previously viewed

Scenario 2: Show error when user changes search settings (city, number of events)  
GIVEN: User has no internet connection  
WHEN: User opens app and search for new events  
THEN: User should see an error pop up

## Feature 5: Add an App shortcut to Home Screen

As a user, I should be able to add an app shortcut to Home Screen so that I can enter the app from my home screen conveniently  
Scenario 1: User can install meet app as a shortcut on their device home screen  
GIVEN: User installed meet app  
WHEN: User click to install app as shortcut to home screen  
THEN: User should see App shortcut in home screen

## Feature 6: Display charts visualizing event details

As a user, I should be able to see a chart showing number of upcoming events in each city so that I know the number of events being hosted in each city.  
Scenario 1: Show a chart with number of upcoming events in each city  
GIVEN: User at home page  
WHEN: User did not select city  
THEN: User should see a chart showing number of events in each city



