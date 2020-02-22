import React, {Component} from 'react';

import CityInput from '../CityInput/CityInput';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherForecast from '../WeatherForecast/WeatherForecast';

// import axios from 'axios';
            import { forecastData, weatherData } from '../../weatherData';

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
        
        // const query = `?q=${city}&APPID=${this.apiID}`
        // axios.all([
        //     axios.get(`${this.url}weather${query}`),
        //     axios.get(`${this.url}forecast${query}`)
        //     ])
        //     .then(([weather, forecast]) => {
        //         console.log(weather.data)
        //         console.log(forecast.data.list)
        //         this.setState({
        //             weatherNow: weather.data,
        //             weatherForecast: forecast.data.list,
        //             city: city
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({errorMessage: error.response.data.message})
        //     })

                        this.setState({
                            weatherNow: weatherData,
                            weatherForecast: forecastData.list,
                            city: city
                        })
    }


    componentDidMount = () => {
        this.getWeatherData('Krakow')
    }

    render () {

        let now = this.state.weatherNow;
        let forecast = this.state.weatherForecast;
        let cityName = this.state.city;

        return (
            <div className={styles.forecast}>
                <CityInput getWeatherData={this.getWeatherData} />
                <WeatherNow weatherNow={now} cityName={cityName} />
                <WeatherForecast weatherForecast={forecast}/>
            </div>
        )
    }
}

export default Forecast;