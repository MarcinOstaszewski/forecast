import React, { Component } from 'react';

import styles from './WeatherNow.module.css'

class WeatherNow extends Component {

    iconUrl = 'http://openweathermap.org/img/w/'

    render() { 
        
        let visible = (!(this.props.weatherNow) ) ? {display: 'none'} : {};

        let cityName = this.props.cityName;
        let coords, description, pressure, humidity, windspeed, winddeg, temp1, temp2, icon;
        if (this.props.weatherNow) {
            coords = `Latitude: ${this.props.weatherNow.coord.lat}, Longitude: ${this.props.weatherNow.coord.lon}`;
            description = `Now: ${this.props.weatherNow.weather[0].description}`;
            humidity = `Humidity: ${this.props.weatherNow.main.humidity} % `;
            pressure = `Pressure: ${this.props.weatherNow.main.pressure} hPa`;
            windspeed = `Wind speed: ${this.props.weatherNow.wind.speed} km/h`;
            winddeg = `Wind direction: ${this.props.weatherNow.wind.deg} deg`;
            temp1 = `Temperature:`;
            temp2 = `${(Number(this.props.weatherNow.main.temp) - 273.15).toFixed(1)} C | ${(Number(this.props.weatherNow.main.temp)*9/5-459.67).toFixed(1)} F`;
            
            icon = <img className={styles.imgBig} src={this.iconUrl + this.props.weatherNow.weather[0].icon + '.png'}  alt="weather icon"  />
        }

        return ( 
            <section id="weatherNow" style={visible}>
                <div className={styles.row}>
                    <div id={styles.name}>{cityName}</div>
                    <div id={styles.coords}>{coords}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column} id={styles.details}>
                        <div id={styles.description}>{description}</div>
                        <div id={styles.pressure}>{pressure}</div>
                        <div id={styles.humidity}>{humidity}</div>
                        <div id={styles.windspeed}>{windspeed}</div>
                        <div id={styles.winddeg}>{winddeg}</div>
                    </div>
                    <div className={styles.row}>
                        <div>{icon}</div>
                        <div id={styles.temp}><span>{temp1}</span><b>{temp2}</b></div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default WeatherNow;