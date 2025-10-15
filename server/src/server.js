import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { PORT } from './config/env.config.js';
import apiRouter from "./routes/api.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})