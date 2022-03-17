import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyDMzYB5MbWj-QD3ob3wuvbRcUHNbYeV_Hw',
        part: 'snippet',
        maxResults: 10
    }
});