// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir solicitudes desde otros dominios
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta para manejar solicitudes GET
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
