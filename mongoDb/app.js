const mongoose = require('mongoose');
const express = require('express');
const productRoute = require('./routes/product.route.js')
const Product = require('./models/product.model.js');

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("hello from node api");
})




mongoose.connect("mongodb+srv://somyachaturvedi1964:3yluZJaDRc629PWS@backend.emut2lh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("Connected");
        app.listen(5000, () => {
            console.log("Running")
        });
    })
    .catch(() => {
        console.log("Not Connected");
    });





// 3yluZJaDRc629PWS

// somyachaturvedi1964


// mongodb+srv://somyachaturvedi1964:3yluZJaDRc629PWS@backend.emut2lh.mongodb.net/?retryWrites=true&w=majority&appName=Backend