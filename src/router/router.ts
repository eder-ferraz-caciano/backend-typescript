import express, { Request, Response } from "express";
import { Admin } from "./admin";
import { Autenticacao } from "./auth";

export class Controller {
  constructor (app: express.Express) {
    new Admin(app);
    const login = new Autenticacao();

    app.post("/login", login.login)

    app.get("*", (req: Request, res: Response) => {
      // res.sendFile(path.join(pathPublic, 'index.html'))
      res.status(401).send("Invalid router access!");
    });
  }
}