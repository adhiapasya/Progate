fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=Jakarta&days=3", {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'a775146de4msh65e5668612e6ee1p1271d1jsn9831897d791f'
        }
    })
    .then(response => {
        console.log(response.json());
    })
    .catch(err => {
        console.error(err);
    });