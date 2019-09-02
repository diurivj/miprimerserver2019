const http = require('http');

const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/': {
      response.write(`
        <html>
          <style>
            h1 {
              color: peru;
            }
          </style>
          <h1>Diego Uriel Vazquez Jaramillo</h1>
          <p>22 years old</p>
          <a href="/about">About</a>
          <a href="/funfact">Fun fact</a>
          <script>
            document.querySelector('h1').onclick = () => {
              document.querySelector('p').style.opacity = 0;
            }
          </script>
        </html>      
      `);
      response.end();
      break;
    }
    case '/about': {
      response.write(`
      <html>
        <p>Me gusta</p>
        <ul>
          <li>Comer</li>
          <li>Ir al boliche</li>
          <li>Tomar</li>
          <li>Libros</li>
          <li>Musica</li>
        </ul>
        <a href="/">Home</a>
      </html>      
    `);
      response.end();
      break;
    }
    case '/funfact': {
      response.write(`
      <html>
        <h2>Fun fact:</h2>
        <p>en serio vas a sacar un disco de gospel?</p>
        <p>oh yes, I'm very christian</p>
        <a href="/">Home</a>
      </html>      
    `);
      response.end();
      break;
    }
  }
});

server.listen(3000, () => {
  console.log('Escuchando en el 3000');
});
