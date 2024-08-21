const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is live');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
