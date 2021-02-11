import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import ClasseRouter from "./src/router";

createConnection().then(async connection => {

    let app = express();
    app.use(cors());
    app.use(bodyparser.json());

    new ClasseRouter(app);

    app.listen(process.env.APP_PORT, () => {
        console.log(`🏃‍♂️ Running!
Host: ${process.env.APP_HOST} - Port: ${process.env.APP_PORT} - Database: ${process.env.DB_DATABASE}`);
    });

}).catch(error => console.log(error));
