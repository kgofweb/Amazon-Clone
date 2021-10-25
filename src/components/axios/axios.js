// Axios is a library that helps us make http requests to external resources. In our React applications we often need to retrieve data from external APIs so it can be displayed in our web pages. ... After we retrieve the data, we typically add it to the state, so it's ready to be used by our application

// Axios performs automatic transforms of JSON data. Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the . json() method on the response. Axios allows cancelling request and request timeout.

import axios from 'axios'

const instance = axios.create({
  // API URL
  baseURL: 'http://localhost:5001/clone-915b4/us-central1/api'
})

export default instance;