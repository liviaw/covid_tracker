import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// this will directly look to the index file, so its the same as putting ./api/index.js
// you just never need to specify index files
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});

    }
    render() {
        // {} is called object destructuring. It’s a JavaScript expression that allows us to extract data from arrays, objects, maps and sets" 
        // https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
        const { data } = this.state;
        return (
            <div className={styles.container}>
               <Cards data = {data}/> 
               {/* if we didnt delcare const {data } = this.state;, then we have to do below: */}
               {/* <Cards data = {this.state.data}/> */}
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }


}

// having module.css will make it specific to that foluder only,
// and will not apply to the entire project

export default App;