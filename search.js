//                           SEARCH JS                  //
let availableWords = [];

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

    switch (inputBox.value) {
        case "Sport Stars":
            window.open('news/news1.html')
            break;
        case "Our Earth":
            window.open('news/news2.html')
            break;
        case "Factory and it's harm":
            window.open('news/news3.html')
            break;        
        case "Politics want freedom":
            window.open('news/news4.html')
            break;
        case "Caspian Sea":
            window.open('news/news5.html')
            break;
        case "Turkish Hospital":
            window.open('news/news6.html')
            break;
        case "Tourism":
            window.open('news/news7.html')
            break;
        case "Fast Trains":
            window.open('news/news8.html')
            break;
        case "Plain ticket price":
            window.open('news/news9.html')
            break;
        case "Hockey Game":
            window.open('news/news10.html')
            break;
        case "Archeology Finds":
            window.open('news/news11.html')
            break;
        case "AI OpenAI":
            window.open('news/news12.html')
            break;
        case "WARNING! SHARKS":
            window.open('news/news13.html')
            break;
        case "YUMMY AND TASTY":
            window.open('news/news14.html')
            break;
        case "COVID-19 VACCINE":
            window.open('news/news15.html')
            break;
        case "Best barber ever said...":
            window.open('news/news16.html')
            break;
        case "Modern design of the...":
            window.open('news/news17.html')
            break;
        case "Biden said...":
            window.open('news/news18.html')
            break;
        case "Someone counted all stars":
            window.open('news/news19.html')
            break;
        case "Sharks in LA":
            window.open('news/news20.html')
            break;
        default:
            console.log("404");
    }
}
