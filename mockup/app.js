document.addEventListener("DOMContentLoaded", function () {

    const url = 'http://api.openweathermap.org/data/2.5/'
    const apiID = 'fd8de74bb30e63fa5bdd052cabd79493'

    const cityInput = document.querySelector('#city')
    const checkWeatherButton = document.querySelector('#check-weather')
    const icon = document.querySelector('#icon')
    icon.style.display = 'none';

    const getWeatherData = (e) => {
        e.preventDefault();
        const city = cityInput.value

        if (city != "") {
            const query = `?q=${city}&APPID=${apiID}`
            // const address = `${url}weather`

            axios.get(`${url}weather${query}`)
                .then(response => {
                    displayWeatherNow(response.data)
                })
                .catch(error => {
                    console.log('ERROR:',error);
                })

            axios.get(`${url}forecast${query}`)
                .then(response => {
                    console.log(response);
                    // displayWeatherForecast(response.data)
                })
                .catch(error => {
                    console.log('ERROR:', error);
                })
        } else { alert("Input city name") }
    }

    const displayWeatherForecast = (data) => {
        console.log(data);
    }

    const displayWeatherNow = (data) => {
        console.log(data);
        const ids = ['name', 'coords', 'description', 'humidity', 'pressure', 'windspeed', 'winddeg', 'temp', 'icon'];
        const disp = {};

        ids.forEach( id => {
            disp[id] = document.querySelector('#' + id)
            console.log(disp[id])
        })

        disp.name.innerText = `${data.name} `;
        let country = document.createElement('span');
        country.innerText = ` ( ${data.sys.country} ) `;
        country.setAttribute("id", "country");
        disp.name.appendChild(country);

        disp.coords.innerText = `Latitide: ${data.coord.lat}, Longitude: ${data.coord.lon}`;
        disp.description.innerText = `Now: ${data.weather[0].description}`;
        disp.humidity.innerText = `Humidity: ${data.main.humidity} % `;
        disp.pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
        disp.windspeed.innerText = `Wind speed: ${data.wind.speed} km/h`;
        disp.winddeg.innerText = `Wind direction: ${data.wind.deg} deg`;
        disp.temp.innerText = `Temperature: \n${(Number(data.main.temp) - 273.15).toFixed(1)} C | ${(Number(data.main.temp)*9/5-459.67).toFixed(1)} F`;

        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        icon.style.display = 'block';
    }

    checkWeatherButton.addEventListener('click', getWeatherData)

    displayWeatherNow({ "coord": { "lon": 21.01, "lat": 52.23 }, "weather": [{ "id": 520, "main": "Rain", "description": "light intensity shower rain", "icon": "09d" }], "base": "stations", "main": { "temp": 278.67, "feels_like": 272.39, "temp_min": 277.59, "temp_max": 279.82, "pressure": 1017, "humidity": 81 }, "visibility": 10000, "wind": { "speed": 6.7, "deg": 300 }, "clouds": { "all": 75 }, "dt": 1582295173, "sys": { "type": 1, "id": 1713, "country": "PL", "sunrise": 1582263660, "sunset": 1582300719 }, "timezone": 3600, "id": 756135, "name": "Warsaw", "cod": 200 })

});