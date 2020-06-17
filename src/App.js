import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {

        return (
            <div className={styles.container}>
                <Cards/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }


}

// having module.css will make it specific to that foluder only,
// and will not apply to the entire project

export default App;