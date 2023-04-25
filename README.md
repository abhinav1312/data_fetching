# SUMMARY
## Tech stack used: 
### Frontend:
- ReactJs,
- Tailwind CSS
### Backend Api creation:
- NodeJs
- ExpressJs
### Database to store the given api:
- MongoDB atlas

## Description
### Backend
- The backend api was built using NodeJs, ExpressJs, MongoDB atlas and pagination technique
- To fetch the given query, a very simple approach was performed. The queries were passed as parameters and according to the condition, the data was fetched and displayed. The queries related to the task were stored in an object. The parameter of the request header was as the key and the value was the queries to fetch.
- A snapshot of the ExpressJs API is here:
- The taskObj contained the following and more :
  
### Frontend
- The frontend of the app has been built using ReactJs and its components. To
keep the app clean, the page has been broken down into several components
for easy understanding of the codebase.
- React hooks such as ‘useEffect(), useState()’ has been made into use for
proper well defined state management.
- Axios library has been used to fetch data using API.
- Tailwind CSS has been used to design the components. Tailwind makes
designing the components easier.
The screenshot of the main page which contains all the component is below:
*** Note: The entire code is present on github, please visit it from here. ***

### Making the API Faster:
- To make the API faster, pagination techniques were made into play. In this
technique, we fetch the data in chunks according to the need. The chunk size I decided to go with was 5 and the time to fetch and display data was drastically reduced.
- I could have used cache memory as well, but that won't be too great as if the data changes dynamically we would still be presented with old data until the cache memory is empty after its ‘time to live (TTL)’. Changing the cache dynamically would make this app more complex and of no greater use than pagination technique.
- The deployed API over the Vercel platform fetches data in average 450 - 500 milliseconds, which is great.
*** The POSTMAN screenshot of the time is attached below: ***

### UI Screenshots:
- When the page loads, useEffect() hook populates the table from random documents
- Drop down menu for filter options to search for a given task.
- Next and previous button trigger pagination technique and backend
    

*** Please visit the github or deployed app for complete understanding and interaction with the codebase and the app.  ***
- Project github link: https://github.com/abhinav1312/data_fetching 
- Deployed Vercel link: https://data-fetching-three.vercel.app
Thank You
