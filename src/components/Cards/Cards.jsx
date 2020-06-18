import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ( {data : { confirmed, recovered, deaths, lastUpdate } }) => {
    // if not confirmed, there is no data at all
    if (!confirmed) {
        return <h1> 'Loading...'</h1>;
    }
    
    return (
        <div className = {styles.container} >
            {/* grid is like a type of container */}
            <Grid container spacing={3} justify="center">
                {/* xx (is mobile screen) and md is the space for different screen sizes */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> 
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of Recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2"> Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Cards;