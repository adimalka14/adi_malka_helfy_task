import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { PORT, ALLOWED_ORIGINS, NODE_ENV, SEED } from './config/env.config.js';
import apiRouter from "./routes/api.routes.js";
import { seedDemo } from './services/tasks.service.js';

const app = express();

app.use(cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/health', (req, res) => {
  res.send('OK');
});

if (NODE_ENV !== 'production' && SEED) {
  seedDemo();
  console.log('Seeded demo tasks');
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})