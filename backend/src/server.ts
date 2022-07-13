require('dotenv').config();
import express from 'express';

const app = express();
const port = process.env.SERVER_PORT;

app.get('/enquetes', (req, res) => {
  return res.send("test");
});

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`);
});

