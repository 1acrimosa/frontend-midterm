const NewsAPI = 'd38b2d3ed9e34b9a9a95aad97e8f8031';

//                     LOADING JS               //

var loader;

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    loadNow(1);
});

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.1);
        }, 80);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}


//                   CAROUSEL JS                   //

let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const navButtons = document.querySelectorAll('.slider-nav a');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    navButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startAutoplay() {
    setInterval(nextSlide, 2090);
}

showSlide(currentIndex);
startAutoplay();



//                       SIGN PAGE JS                 //

let signUpButton = document.getElementById('signUpButton');
let signInButton = document.getElementById('signInButton');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signInButton.onclick = function () {
    nameField.style.maxHeight = '0';

    title.innerHTML = 'Sign In';
    signUpButton.classList.add('disable');
    signInButton.classList.remove('disable');
}

signUpButton.onclick = function () {
    nameField.style.maxHeight = '60px';

    title.innerHTML = 'Sign Up';
    signInButton.classList.add('disable');
    signUpButton.classList.remove('disable');
}


//                      WEATHER JS                      //

// fdbb5453a0495f446c407890217cc2ef

document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const search = document.querySelector('.search-box button');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    const error404 = document.querySelector('.not-found');

    search.addEventListener('click', () => {
        console.log("hello");

        const API = 'fdbb5453a0495f446c407890217cc2ef';
        const city = document.querySelector('.search-box input').value;

        if (city === '')
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`)
            .then(response => response.json())
            .then(json => {

                console.log("check");

                if (json.cod === '404') {
                    container.style.height = '400px';
                    weatherBox.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    error404.style.display = 'block';
                    error404.classList.add('fadeIn');
                    return;
                }

                error404.style.display = 'none';
                error404.classList.remove('fadeIn');

                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
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

                weatherBox.style.display = '';
                weatherDetails.style.display = '';
                weatherBox.classList.add('fadeIn');
                weatherDetails.classList.add('fadeIn');
                container.style.height = '590px';

            });

    })
});

//                           SEARCH JS                  //


fetch('availableWords.json')
    .then(response => response.json())
    .then(data => {
        availableWords.push(...data);
    })
    .catch(error => console.error(error));

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");


inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultsBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
