import axios from 'axios';

const KEY = 'AIzaSyCSmPWsXT51QCQ7sUdFjoGNL5JG_Ne9pfU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});
