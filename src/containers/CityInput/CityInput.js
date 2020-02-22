import React, { Component } from 'react';

import styles from "./CityInput.module.css"

class CityInput extends Component {
    state = { city: 'Krakow' }

    sendCityName = e => {
        e.preventDefault()
        this.props.getWeatherData(this.state.city)
    }

    changeInputTextHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        // console.log(this.props)
        return ( 
            <main>
                <form id="location-form">
                    <fieldset>
                        <legend>Input city name </legend>
                        <p>
                            <input type="text" 
                                id={styles.city} 
                                name="city" 
                                onChange={this.changeInputTextHandler} 
                                value={this.state.city}/>
                        </p>
                        <button id={styles.checkWeather} onClick={this.sendCityName}>Check weather</button>
                    </fieldset>
                </form>
            </main>
         );
    }
}
 
export default CityInput;