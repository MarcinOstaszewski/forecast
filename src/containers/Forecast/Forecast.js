import React, {Component} from 'react';

import axios from 'axios';

class Forecast extends Component {

    url = 'http://api.openweathermap.org/data/2.5/'
    apiID = 'fd8de74bb30e63fa5bdd052cabd79493'

    displayWeatherNow = (data) => {
        console.log(data)
        // const ids = ['name', 'coords', 'description', 'humidity', 'pressure', 'windspeed', 'winddeg', 'temp', 'icon'];
        // const disp = {};

        // ids.forEach(id => {
        //     disp[id] = document.querySelector('#' + id)
        // })

        // disp.name.innerText = `${data.name} `;
        // let country = document.createElement('span');
        // country.innerText = ` ( ${data.sys.country} ) `;
        // country.setAttribute("id", "country");
        // disp.name.appendChild(country);

        // disp.coords.innerText = `Latitide: ${data.coord.lat}, Longitude: ${data.coord.lon}`;
        // disp.description.innerText = `Now: ${data.weather[0].description}`;
        // disp.humidity.innerText = `Humidity: ${data.main.humidity} % `;
        // disp.pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
        // disp.windspeed.innerText = `Wind speed: ${data.wind.speed} km/h`;
        // disp.winddeg.innerText = `Wind direction: ${data.wind.deg} deg`;
        // disp.temp.innerText = `Temperature: \n${(Number(data.main.temp) - 273.15).toFixed(1)} C | ${(Number(data.main.temp)*9/5-459.67).toFixed(1)} F`;

        // icon.src = `${iconUrl}${data.weather[0].icon}.png`
        // icon.style.display = 'block';

        // document.querySelector('#weather-now').style.display = 'block'

    }
    

    componentDidMount = () => {
        
        const query = `?q=Krakow&APPID=${this.apiID}`
        axios.get(`${this.url}weather${query}`)
            .then(response => {
                this.displayWeatherNow(response.data)
            })
            .catch(error => {
                console.log('ERROR:', error);
            })

    }
    render () {
        return (
            <div className="Forecast">
                <h1>TEST</h1>
            </div>
        )
    }
}

export default Forecast;