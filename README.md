# SUMMARY
## Project github link: https://github.com/abhinav1312/data_fetching 
## Deployed Vercel link: https://data-fetching-three.vercel.app
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
<img width="912" alt="Screenshot 2023-04-25 at 14 14 43" src="https://user-images.githubusercontent.com/79260179/234237046-f24610dd-d773-4dae-a8ce-d83c557db5d0.png">

- The taskObj contained the following and more :
  <img width="696" alt="Screenshot 2023-04-25 at 14 15 12" src="https://user-images.githubusercontent.com/79260179/234237071-8daa0ec8-14d4-41a8-9888-2d0752706f47.png">

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

<img width="1440" alt="Screenshot 2023-04-25 at 14 29 26" src="https://user-images.githubusercontent.com/79260179/234236908-f50733e9-8651-43d3-9a7c-0987fc5bacfe.png">

### Making the API Faster:
- To make the API faster, pagination techniques were made into play. In this
technique, we fetch the data in chunks according to the need. The chunk size I decided to go with was 5 and the time to fetch and display data was drastically reduced.
- I could have used cache memory as well, but that won't be too great as if the data changes dynamically we would still be presented with old data until the cache memory is empty after its ‘time to live (TTL)’. Changing the cache dynamically would make this app more complex and of no greater use than pagination technique.
- The deployed API over the Vercel platform fetches data in average 450 - 500 milliseconds, which is great.
*** The POSTMAN screenshot of the time is attached below: ***

<img width="1440" alt="Screenshot 2023-04-25 at 14 22 00" src="https://user-images.githubusercontent.com/79260179/234236789-71995ccf-4e0f-4ced-8245-3867534fb1b9.png">

### UI Screenshots:
- When the page loads, useEffect() hook populates the table from random documents.
<img width="1440" alt="Screenshot 2023-04-25 at 14 39 47" src="https://user-images.githubusercontent.com/79260179/234237220-7b36f97d-9dbf-43fc-99d2-28127bf7137c.png">

- Drop down menu for filter options to search for a given task.
<img width="1440" alt="Screenshot 2023-04-25 at 14 40 03" src="https://user-images.githubusercontent.com/79260179/234237336-fd6a8ca7-446a-4e58-b1ac-0f78e5d49662.png">

- Next and previous button trigger pagination technique and backend.

    <img width="1440" alt="Screenshot 2023-04-25 at 14 40 30" src="https://user-images.githubusercontent.com/79260179/234237442-e1d6f84b-4a37-4322-bfe6-ebece566d847.png">
<img width="1440" alt="Screenshot 2023-04-25 at 14 40 11" src="https://user-images.githubusercontent.com/79260179/234237479-70a2964d-38c8-4757-81f2-fbb4226be769.png">


*** Please visit the github or deployed app for complete understanding and interaction with the codebase and the app.  ***
- Project github link: https://github.com/abhinav1312/data_fetching 
- Deployed Vercel link: https://data-fetching-three.vercel.app
Thank You
