import { Request, Response } from "express";

export class User {
  constructor () {}

  public listar = async (req: Request, res: Response) => {
    try {
      return res.json({ registros: [] });
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public exibir = async (req: Request, res: Response) => {
    try {
      return res.json({ registros: {} });
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public editar = async (req: Request, res: Response) => {
    try {
      return res.json({ registros: "Registro alterado com sucesso!" });
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public salvar = async (req: Request, res: Response) => {
    try {
      return res.json({ registros: "Registro salvo com sucesso!" });
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public deletar = async (req: Request, res: Response) => {
    try {
      return res.json({ registros: "Registro deletado com sucesso!" });
    } catch (error) {
      return res.json({ erro: error });
    }
  }
}
