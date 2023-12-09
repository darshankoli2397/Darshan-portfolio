// server/index.js
const express = require('express');
const app = express();
const port = 3001; // You can choose any available port

app.get('/', (req, res) => {
  res.send('Hello from your server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
