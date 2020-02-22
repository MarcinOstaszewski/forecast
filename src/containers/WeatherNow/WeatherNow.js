import React, { Component } from 'react';

import styles from './WeatherNow.module.css'

class WeatherNow extends Component {
    constructor(props) {
        super(props);
    }

    iconUrl = 'http://openweathermap.org/img/w/'

    render() { 

        let cityName = this.props.cityName;
        let coords, description, pressure, humidity, windspeed, winddeg, temp, icon;
        if (this.props.weatherNow) {
            coords = `Latitude: ${this.props.weatherNow.coord.lat}, Longitude: ${this.props.weatherNow.coord.lon}`;
            description = `Now: ${this.props.weatherNow.weather[0].description}`;
            humidity = `Humidity: ${this.props.weatherNow.main.humidity} % `;
            pressure = `Pressure: ${this.props.weatherNow.main.pressure} hPa`;
            windspeed = `Wind speed: ${this.props.weatherNow.wind.speed} km/h`;
            winddeg = `Wind direction: ${this.props.weatherNow.wind.deg} deg`;
            temp = `Temperature: \n${(Number(this.props.weatherNow.main.temp) - 273.15).toFixed(1)} C | ${(Number(this.props.weatherNow.main.temp)*9/5-459.67).toFixed(1)} F`;
            
            icon = <img src={this.iconUrl + this.props.weatherNow.weather[0].icon + '.png'} className={styles.imgBig} alt="weather icon"></img>
        }

        return ( 
            <section id="weather-now">
                <div className={styles.row}>
                    <div id="name">{cityName}</div>
                    <div id="coords">{coords}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column} id="details">
                        <div id="description">{description}</div>
                        <div id="pressure">{pressure}</div>
                        <div id="humidity">{humidity}</div>
                        <div id="windspeed">{windspeed}</div>
                        <div id="winddeg">{winddeg}</div>
                    </div>
                    <div className={styles.row}>
                        <div >{icon}</div>
                        <div id="temp">{temp}</div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default WeatherNow;