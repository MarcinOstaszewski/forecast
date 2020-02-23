import React, { Component } from 'react';
import { bigCities } from '../../assets/bigCities'

import styles from "./CityInput.module.css"

class CityInput extends Component {
    state = { city: '' }

    sendCityName = (e, city) => {
        if (e) {e.preventDefault()}
        if (city) {
            this.props.getWeatherData(city)
        } else {
            this.props.getWeatherData(this.state.city)
        }
    }

    randomCityName = e => {
        e.preventDefault();
        let randNum = Math.floor(Math.random() * bigCities.length)
        this.setState({
            city: bigCities[randNum][0]
        })
        this.sendCityName(null, bigCities[randNum][0]);
    }

    changeInputTextHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return ( 
            <main>
                <form id={styles.locationForm}>
                    <fieldset>
                        <legend>Input city name </legend>
                        <p>
                            <input type="text" 
                                id={styles.city} 
                                name="city" 
                                onChange={this.changeInputTextHandler} 
                                value={this.state.city}/>
                        </p>
                        <div className={styles.flexRow}>
                            <button id={styles.checkWeather} onClick={this.sendCityName}>Check weather</button>
                            <button id={styles.random} onClick={this.randomCityName}>Random city</button>
                        </div>
                    </fieldset>
                </form>
            </main>
         );
    }
}
 
export default CityInput;