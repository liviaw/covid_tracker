import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);
    
    return (
        <div className = {styles.container} >
            {/* grid is like a type of container */}
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"> data from api</Typography>
                        <Typography color="textSecondary"> date from api</Typography>
                        <Typography variant="body2"> Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"> data from api</Typography>
                        <Typography color="textSecondary"> date from api</Typography>
                        <Typography variant="body2"> Number of Recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        {/* this is for text, so it's like <p> <h1> etc */}
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"> data from api</Typography>
                        <Typography color="textSecondary"> date from api</Typography>
                        <Typography variant="body2"> Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Cards;