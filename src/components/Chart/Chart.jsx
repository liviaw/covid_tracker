import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    // dailyData is the state, setting initial value as empty array []
    // setDailyData is a setting method, its setting daily data as empty object
    const [ dailyData, setDailyData ] = useState( [] );

    // dailyData will only be for the global
    // country that is parsed in will be for individual countries, where you put the bar chart

    // same as doing this:
    // state = {
    //     dailyData: {}
    // }

    useEffect (() => {
        // callback
        const fetchAPI = async () => {
            // this will return a promis
            // const dailyData = await fetchDailyData(); 
            setDailyData(await fetchDailyData());
            // this will populates dailyData
        }
        fetchAPI();
        // putting [] as return will make it only run fetchAPI once
    }, []);

    // we need two different chart, bar chart and line chart
    
    // this is a component we import from line.js
    const lineChart = (
        dailyData.length !== 0 ? (
            <Line data = {{
                labels: dailyData.map( ({ date }) => date ),
                // array of objects
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
                // we only have two objects bcs there is no data for recovered
            }}
            />
        ) : null
    );



    const barChart = (
        confirmed ? (
            // two {} bcs one is to make it dynamic and the other one is to opening the object
            <Bar data= {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
            }}
            options={{
                legend: { display: false},
                title: { display: true, text:`Current state in ${country}`},
            }}
            />
        ) : null
    );
    return (
        <div className={styles.container}> 
            {country ? barChart : lineChart}
        </div>
    )
    
}

export default Chart;