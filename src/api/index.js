// axios is used to make api requests
import axios from 'axios';

// url of the api
const url = 'https://covid19.mathdro.id/api';

// async function deals with promises
// same way with .then
const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response;
    }

    catch (error) {


    }
}