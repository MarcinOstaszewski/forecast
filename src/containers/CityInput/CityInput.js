import React, { Component } from 'react';

import styles from "./CityInput.module.css"

class CityInput extends Component {
    state = { city: '' }

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
                        <button id={styles.checkWeather} onClick={this.sendCityName}>Check weather</button>
                    </fieldset>
                </form>
            </main>
         );
    }
}
 
export default CityInput;