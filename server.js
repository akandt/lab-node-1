"use strict"

const app = require('express')();
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('Server started')
});

app.get('/', (req, res) => {
    const quotes = require('./quotes');
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    res.write(JSON.stringify(randomQuote));
    res.end();
});