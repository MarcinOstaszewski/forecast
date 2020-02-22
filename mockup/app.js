document.addEventListener("DOMContentLoaded", function () {

    const url = 'http://api.openweathermap.org/data/2.5/weather?'
    const apiID = 'fd8de74bb30e63fa5bdd052cabd79493'

    const cityInput = document.querySelector('#city')
    const checkWeatherButton = document.querySelector('#check-weather')

    const getWeatherForecast = (e) => {
        e.preventDefault();
        const city = cityInput.value

        if (city != "") {
            const address = `${url}q=${city}&APPID=${apiID}`
            console.log(address)

            axios.get(address)
                .then(response => {
                    displayWeatherNow(response.data)
                })
                .catch(error => {
                    console.log('ERROR:',error);
                })

        } else {
            alert("Input city name")
        }
    }

    const displayWeatherNow = (data) => {
        console.log(data)
        const name = document.querySelector('#name')
        name.innerText = data.name

    }
    checkWeatherButton.addEventListener('click', getWeatherForecast)


});