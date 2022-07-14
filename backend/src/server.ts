require('dotenv').config();
import express from 'express';
import {routes} from './routes';

const app = express();
const port = process.env.SERVER_PORT;
app.use(express.json());
app.use(routes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

