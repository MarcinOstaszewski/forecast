import React, {Component} from 'react';

import CityInput from '../CityInput/CityInput';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import axios from 'axios';

import styles from './Forecast.module.css'

class Forecast extends Component {
    state = {
        weatherNow: false,
        weatherForecast: false,
        errorMessage: '',
        city: ''
    }

    url = 'http://api.openweathermap.org/data/2.5/'
    apiID = 'fd8de74bb30e63fa5bdd052cabd79493'

    getWeatherData = (city) => {
        const query = `?q=${city}&APPID=${this.apiID}`

        axios.all([
            axios.get(`${this.url}weather${query}`),
            axios.get(`${this.url}forecast${query}`)
            ])
            .then(([weather, forecast]) => {
                this.setState({
                    weatherNow: weather.data,
                    weatherForecast: forecast.data.list,
                    city: city
                })
            })
            .catch(error => {
                this.setState({errorMessage: error.response.data.message})
            })

    }

    // componentDidMount = () => {
    // }
    
    render () {
        
        let now = this.state.weatherNow;
        let forecast = this.state.weatherForecast;
        let cityName = this.state.city;

        return (
            <div className={styles.Forecast}>
                <h1>TEST</h1>
                <CityInput getWeatherData={this.getWeatherData} />
                <WeatherNow weatherNow={now} cityName={cityName}/>
                <WeatherForecast weatherForecast={forecast} cityName={cityName}/>
            </div>
        )
    }
}

export default Forecast;