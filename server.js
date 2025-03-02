// server.js
const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
    // Устанавливаем заголовки ответа
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Отправляем HTML-код
    res.end(`
         <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Приветственный сервер</title>
    </head>
    <body>
        <h1>Добро пожаловать!</h1>
        <p>Это простейший сервер на Node.js.</p>
        <p><strong>Обновление:</strong> Теперь страница содержит дополнительную информацию!</p>
    </body>
    </html>
    `);
});

// Запускаем сервер на порту 4000
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});