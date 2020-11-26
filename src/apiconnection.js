/*
*
* File: api.js 
* Description: Axios scaffolding. Used to fetch data from the API server. 
* Version: 1.0
* 
*/

import axios from 'axios';

export default axios.create({
    baseURL: 'https://imagineersapi.jeroenshare.nl', // <-- Needs to be changed whenever this application goes into production.
    withCredentials: true,
});