import React, { Component } from 'react';

import styles from './WeatherForecast.module.css'


class WeatherForecast extends Component {

    iconUrl = 'http://openweathermap.org/img/w/'

    render() { 

        let visible = (!(this.props.weatherForecast) ) ? {display: 'none'} : {};
        // console.log(!(!(this.props.weatherForecast)));
        let columns = []
        for (let i = 0; i < 9; i++) { // creates 9 columns with forecast data
            let data = this.props.WeatherForecast;
            let column = <div className={styles.nineth}>
                    



                    {/* <div className={styles.temp}>{(Number(data[i].main.temp) - 273.15).toFixed(1)} C</div>
                    <div className={styles.icon}>
                        <img src={this.iconUrl+data[i].weather[0].icon+".png"} alt="weather icon" className={styles.imgSml}></img>
                    </div>
                    <div className={styles.temp}>{data[i].dt_txt.slice(5, 10)} {data[i].dt_txt.slice(-8, -3)}</div> */}
            </div>;

            columns.push(column);
            
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