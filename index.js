
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(PORT, () => {
  console.log('OPEN --------->', 'http://localhost/');
});
