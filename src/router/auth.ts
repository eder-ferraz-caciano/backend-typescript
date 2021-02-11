import express, { Request, Response } from "express";

export default class Autenticacao {
  constructor () {}

  public login = async (req: Request, res: Response) => {
    try {
      return res.json({
        payload: "payload",
        token: ""
      })
    } catch (error) {
      return res.json({ erro: error });
    }
  }
}
