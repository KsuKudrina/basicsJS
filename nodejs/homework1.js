let count1 = 0;
let count2 = 0;
let count404 =0;

const http = require('http');
const server = http.createServer ((req, res) => {

    console.log('Запрос получен');
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        count1++;
        res.end ('<a href="/about">Перейти на страницу обо мне! </а>');
        console.log(`Количество посещений главной страницы ${count1}`);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        count2++;
        res.end('<a href="/"> Перейти на страницу главная! </a>');
        console.log(`Количество посещений страницы "обо мне" ${count2}`);

    }else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        count404++;
        res.end ('<h1>Страница 404</h1>');
        console.log(`Такой страницы нет ${count404} раз`);
    }
})

const port = '3000';
server.listen(port, () => {
    console. log( `Сервер запущен на порту ${port}`);
});