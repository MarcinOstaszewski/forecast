import React, { Component } from 'react';

import styles from './WeatherForecast.module.css'


class WeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data }
    }


    render() { 
        return ( 
            <section id="weather-forecast">
                <span className={styles.txtBig}>Forecast:</span>
                <div className={styles.row}>
                    
                </div>
            </section>
         );
    }
}
 
export default WeatherForecast;