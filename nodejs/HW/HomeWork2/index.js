const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Welcome! </h1> <a href="/about">To about page</a>' );
})

app.get('/about', (req, res) => {
    res.send('<h1>Welcome to about! </h1> <a href="/">To main page</a>' );
})


app.listen(3000);

 

app.use(express.static('static'));

