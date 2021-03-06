import React, { Component } from 'react';

import styles from './WeatherForecast.module.css'

class WeatherForecast extends Component {

    iconUrl = 'https://openweathermap.org/img/w/'

    render() { 
        let visible = (!(this.props.weatherForecast) ) ? {display: 'none'} : {};
        let columns = []

        if (this.props.weatherForecast !== false) {
            let data = this.props.weatherForecast;
            for (let i = 1; i < 10; i++) { // creates 9 columns with forecast data
                let column = <div className={styles.nineth} key={i}>
                        <div className={styles.temp}>{(Number(data[i].main.temp) - 273.15).toFixed(1)} C</div>
                        <div className={styles.icon}>
                            <img src={this.iconUrl+data[i].weather[0].icon+".png"} alt="weather icon" className={styles.imgSml}></img>
                        </div>
                        <div className={styles.temp}>{data[i].dt_txt.slice(5, 10)} {data[i].dt_txt.slice(-8, -3)}</div>
                    </div>;

                columns.push(column);
            }
        }
        
        return ( 
            <section id="weather-forecast" style={visible}>
                <span className={styles.txtBig}>Forecast:</span>
                <div className={styles.row}>{columns}</div>
            </section>
         );
    }
}
 
export default WeatherForecast;