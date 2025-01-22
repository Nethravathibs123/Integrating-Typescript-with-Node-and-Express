import express from 'express';
const app = express();

import todoRoutes from './routes/todos';
import bodyparser from 'body-parser';

app.use(bodyparser.json());
app.use(todoRoutes);
app.listen(3000);