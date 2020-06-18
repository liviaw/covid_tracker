// axios is used to make api requests
import axios from 'axios';

// url of the api
const url = 'https://covid19.mathdro.id/api';

// async function deals with promises
// same way with .then
export const fetchData = async () => {
    try {
        //const response = await axios.get(url);
        
        const {data} = await axios.get(url);
// await - waits until the await code finishes, then go to the next
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        //response.data
        return modifiedData;
    }

    catch (error) {


    }
}
// export { default as fetchData } from '.';
// export default fetchData;


 export const fetchDailyData = async () => {
     try {
         // data will be an array
        const { data } = await axios.get(`${url}/daily`);

        // return data;
        // data is an array of objects (object is a dictionary btw)

        const modifiedData = data.map (( dailyData ) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;

     } catch (error) {

     }
 }

//  export {fetchData, fetchDailyData};

export const countries = async () => {
    try {
        const {data: { countries } } = await axios.get(`${url}/countries`);
        // map returns another array
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }

}