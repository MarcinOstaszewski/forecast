import React, { Component } from 'react';

import styles from './WeatherNow.module.css'

class WeatherNow extends Component {

    iconUrl = 'http://openweathermap.org/img/w/'

    render() { 
        
        let visible = (!(this.props.weatherNow) ) ? {display: 'none'} : {};
        let now = this.props.weatherNow
        console.log(now)
        let cityName = this.props.cityName;
        let country, coords, description, pressure, humidity, windspeed, winddeg, temp1, temp2, icon;
        if (now) {
            coords = `Latitude: ${now.coord.lat}, Longitude: ${now.coord.lon}`;
            country = `(${now.sys.country})`
            description = `Weather: ${now.weather[0].description}`;
            humidity = `Humidity: ${now.main.humidity} % `;
            pressure = `Pressure: ${now.main.pressure} hPa`;
            windspeed = `Wind speed: ${now.wind.speed} km/h`;
            winddeg = now.wind.deg ? `Wind direction: ${now.wind.deg} deg` : null // direction is given only when wind is strong enough
            temp1 = `Temperature:`;
            temp2 = `${(Number(now.main.temp) - 273.15).toFixed(1)} C | ${(Number(now.main.temp)*9/5-459.67).toFixed(1)} F`;
            icon = <img className={styles.imgBig} src={this.iconUrl + now.weather[0].icon + '.png'}  alt="weather icon"  />
        }

        return ( 
            <section id="weatherNow" style={visible}>
                <div className={styles.row}>
                    <div id={styles.name}>{cityName}<span>{country}</span></div>
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