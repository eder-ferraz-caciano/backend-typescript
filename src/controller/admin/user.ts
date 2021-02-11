import { User } from "../../models/User";
import { Request, Response } from "express";
import { getRepository } from "typeorm";


export default class UserController {
  constructor () {
  }

  public listar = async (req: Request, res: Response) => {
    try {
      const repo = getRepository(User);
      const registros = await repo.find();

      return res.json(registros);
    } catch (error) {
      return res.json({ erro: error })
    }
  }
}
