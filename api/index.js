const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('./db');

const app = express();
const port = 3001;

app.use(cors()); // Add this line

app.use(express.static(path.join(__dirname, '../my-portfolio/build')));
app.use(bodyParser.json());

// Handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  mysql.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting into database: ', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'Form submission successful' });
  });
});

// ... (other routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
