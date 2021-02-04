import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParse from "body-parser";
import { Controller } from "./src/router/router"

let app = express();

app.use(bodyParse.json());
app.use(cors());

new Controller(app);

app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor inicializado! - Host: ${process.env.APP_HOST} - Port: ${process.env.APP_PORT} - Database: ${process.env.DB_DATABASE}`)
});

export default app;
