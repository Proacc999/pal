import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Welcome to Express way and mahi way');
});

app.get('/tat', (req, res) => {
  res.json("Heloooooo");
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
