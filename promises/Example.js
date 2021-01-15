setTimeout(() => console.log('This will be the last thing...'),5000);

failedData = fetch("https://community-open-weather-map.p.rapidapia.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "SIGN-UP-FOR-KEY",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
});

failedData.then(() => console.log("You're wrong, this api is not working"));
failedData.catch(() => console.log("You're right, this api is not working"));

weatherData = fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "505db7743fmsh6b3e62f328e7d79p185f96jsn93f77a39c1d9",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
});

weatherData.then((data)=> console.log(`The weather is ${data["main"]}`));
weatherData.catch(() => console.log("The connection failed"));

console.log('Me first');