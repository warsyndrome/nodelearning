const express = require ('express');
const https = require ('https');
const app = express();

app.get('/', (req,res) => {
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=099758c0fb61db1b81f5b1194da82912&units=metric'
    
    https.get(url, (response) => {
        // console.log(response.statusCode)
        response.on('data', (data) => {
            // console.log(data)

            const weatherData = JSON.parse(data);
            // console.log(weatherData)
            const temp = weatherData.main.temp;
            // console.log(temp)
            const description = weatherData.weather[0].description;
            // console.log(description);

            res.write('<h1>the temprature in jaipur is ' + temp + 'degree celcius</h1>')

            res.write("<p> the weather descriuption is " + description + " </p> " );
           
        });
     
    });
 
})

app.listen(3000, () => {
    console.log('Running');
})


// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', (req, res) => {

//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=099758c0fb61db1b81f5b1194da82912&units=metric'

//     https.get(url, (response) => {
//         let responseData = '';

//         response.on('data', (data) => {
//             responseData += data;
//             console.log(data)
//         });

//         response.on('end', () => {
//             const weatherData = JSON.parse(responseData);
//             const temp = weatherData.main.temp;
//             res.send('The temperature in Jaipur is ' + temp + ' degrees Celsius');
//         });
//     });

// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
