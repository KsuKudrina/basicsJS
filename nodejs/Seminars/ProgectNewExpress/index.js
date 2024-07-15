// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome! </h1> <a href="/about">To about page</a>' );
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Welcome to about! </h1> <a href="/">To main page</a>' );
// })


// app.listen(3000);

// Подключите промежуточный обработчик express.static().
// 5. В директории со статичными файлами создайте два HTML файла
// index.html и about.html и напишите в них HTML код в котором есть
// ссылки на соседние файлы.

// 💡Подсказки:
// - Обратите внимание, что статичные файлы доступны в браузере без
// обработчиков (app.get(‘/’, (req, res) => {})), по этому вам не
// нужно описывать обработчики
// - Получить доступ к файлу можно напрямую обратившись к имени файла
// в адресной строке (localhost:3000/index.html)

// Создайте в директории со статичными файлами файл index.js с
// содержимым alert(“Привет, Мир!!!”);
// 2. В файлах index.html и about.html подключите скрипт с src=”index.js”
// 3. Создайте в директории со статичными файлами файл index.css со
// стилем, который изменяет цвет ссылки
// 4. В файлах index.html и about.html подключите css файл index.css с
// помощью тега <link/>
// 5. Запустите сервер и попробуйте открыть любую страницу

const express = require('express');
const app = express();

app.use(express.static('static'));


app.listen(3000);