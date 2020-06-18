import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';


import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState( [] );
    useEffect ( () => {
        const fetchCountries = async () =>  {
            setFetchedCountries(await countries);
        }
        fetchCountries();

        // this will make it change only if  setFetchedCountries has changed
    }, [setFetchedCountries]);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global"> Globall </option>
            </NativeSelect>
        </FormControl>

    )
    
}

export default CountryPicker;