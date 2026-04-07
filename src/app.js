import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import dotenv from "dotenv"


import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksrouter from './routes/mocks.router.js'



dotenv.config();

const app = express();
const PORT = 3001;
const MONGO_URI = "mongodb://127.0.0.1:27017/adoptme";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error MongoDB:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksrouter )

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
const swaggerDocument = YAML.load("./src/docs/users.yaml");

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
