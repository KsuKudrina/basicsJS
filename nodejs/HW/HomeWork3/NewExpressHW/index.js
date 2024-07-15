
const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();

const pathToFileMain = path.join(__dirname, 'countMain.json');
const pathToFileAbout = path.join(__dirname, 'countAbout.json');
if (!fs.existsSync(pathToFileMain)) {
    const countFileMain = {
        key: '/',
        count: 0
    }
    fs.writeFile(pathToFileMain, JSON.stringify(countFileMain, null, 2), (error) => {
        if (error) return console.log(error);
    });
 }

 if (!fs.existsSync(pathToFileAbout)) {
    const countFileAbout = {
        key: '/about',
        count: 0
    }
    fs.writeFile(pathToFileAbout, JSON.stringify(countFileAbout, null, 2), (error) => {
        if (error) return console.log(error);
    });
}

app.get('/', (req, res) => {
    fs.readFile(pathToFileMain, "utf-8", (error, data) => {
        if (error) 
            return console.log(error);
        let dataMain = JSON.parse(data, "utf-8");
        dataMain.count++;
        fs.writeFile(pathToFileMain, JSON.stringify(dataMain, null, 2), (error) => {
           if (error) return console.log(error);
        });
        res.send(`<h1>Welcome main page!</h1> <p>Просмотров: ${dataMain.count}</p> <a href="/about">To about page</a>` );
    })
});
app.get('/about', (req, res) => {
    fs.readFile(pathToFileAbout, "utf-8", (error, data) => {
        if (error) 
            return console.log(error);
        let dataAbout = JSON.parse(data, "utf-8");
        dataAbout.count++;
        fs.writeFile(pathToFileAbout, JSON.stringify(dataAbout, null, 2), (error) => {
           if (error) return console.log(error);
        });
    res.send(`<h1>Welcome to about!</h1> <p>Просмотров: ${dataAbout.count}</p> <a href="/">To main page</a>` );
    })
});


const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});