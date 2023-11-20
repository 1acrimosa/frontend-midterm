//                      WEATHER JS                      //



document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search-box button');
    const inputBox = document.querySelector('.search-box input');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');

    search.addEventListener('click', () => {
        console.log("hello");

        const API = 'fdbb5453a0495f446c407890217cc2ef';
        const city = inputBox.value;

        if (city === '')
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`)
            .then(response => response.json())
            .then(json => {

                console.log("check");

                if (json.cod === '404') {
                    weatherDetails.style.display = 'none';
                    return;
                } else {
                    weatherDetails.style.display = 'flex';
                }

                const image = weatherDetails.querySelector('img');
                const temperature = weatherDetails.querySelector('.humidity h5');
                const description = weatherDetails.querySelector('.humidity p');
                const humidity = document.querySelector('.weather-details .humidity span');
                const wind = document.querySelector('.weather-details .wind span');

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'media/clear.png';
                        break;

                    case 'Rain':
                        image.src = 'media/rain.png';
                        break;

                    case 'Snow':
                        image.src = 'media/snow.png';
                        break;

                    case 'Clouds':
                        image.src = 'media/cloud.png';
                        break;

                    case 'Haze':
                        image.src = 'media/mist.png';
                        break;

                    default:
                        image.src = '';
                }

                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
                description.innerHTML = `${json.weather[0].description}`;
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            });

    })
});