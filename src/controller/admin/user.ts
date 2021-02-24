import { User } from "../../models/User";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import crypto from "crypto";
import validate from "validate.js";
// import dayjs from "dayjs";

export default class UserController {
  constructor () {
  }

  private SaveValidate = {
    confirmPassword: { equality: "password", presence: { allowEmpty: false } },
    email: { email: { message: "Doesn't look like a valid email" } },
    login: { presence: { allowEmpty: false } },
    name: { presence: { allowEmpty: false } },
    password: { presence: { allowEmpty: false } }
  };
  private EditValidate = {
      id: { presence: { allowEmpty: false, numericality: true } },
      ...this.SaveValidate
  };

  private criptografarSenha = (password: any) => {
    return crypto.createHash("sha256").update(password).digest("hex");
  };

  public onList = async (req: Request, res: Response) => {
    try {
      const repo = getRepository(User);
      const registros = await repo.find({
        where: {
          deleted_at: null
        }
      });

      return res.json(registros);
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public onView = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) return res.json({ erro: "Usuário não informado"});

      const repo = getRepository(User);
      const registro = await repo.findOne(req.params.id);

      if (!registro) return res.json({ erro: "Usuário não encontrado"});

      return res.json(registro);
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onSave = async (req: Request, res: Response) => {
    try {
      let erro = validate(req.body, this.SaveValidate);
      if (erro) return res.json({ erro: erro });

      const repo = getRepository(User);
      const usuarioJaCadastrado = await repo.find({
        where: {
          deleted_at: null,
          email: req.body.email
        }
      });
      if (usuarioJaCadastrado && usuarioJaCadastrado.length) return res.json({ erro: "Usuário já cadastrado com essas informações"});

      const user = repo.create({
        name: req.body.name.toUpperCase(),
        email: req.body.email,
        password: req.body.password ? String(this.criptografarSenha(req.body.password)) : "",
        birth_date: req.body.birth_date || null,
        url_photograph: req.body.url_photograph || null,
        telephone: req.body.telephone || null,
        theme: req.body.theme || null
      })

      await repo.save(user);

      return res.json({mensage: "Usuário cadastrado com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onEdit = async (req: Request, res: Response) => {
    try {
      let erro = validate(req.body, this.EditValidate);
      if (erro) return res.json({ erro: erro });

      const repo = getRepository(User);
      const usuarioJaCadastrado = await repo.find({
        where: {
          deleted_at: null,
          id: req.body.id
        }
      });
      if (!usuarioJaCadastrado) return res.json({ erro: "Usuário não encontrado!"});

      const user = repo.create({
        name: req.body.name.toUpperCase(),
        email: req.body.email,
        password: req.body.password ? String(this.criptografarSenha(req.body.password)) : "",
        birth_date: req.body.birthDate || null,
        url_photograph: req.body.urlPhotograph || null,
        telephone: req.body.telephone || null,
        theme: req.body.theme || null
      })

      await repo.update(req.body.id, user);

      return res.json({mensage: "Usuário alterado com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onDelete = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) return res.json({erro: "Usuário não informado"});

      const repo = getRepository(User);
      const usuarioJaCadastrado = await repo.find({
        where: {
          deleted_at: null,
          id: req.params.id
        }
      });
      if (!usuarioJaCadastrado) return res.json({erro: "Usuário não encontrado!"});

      await repo.softDelete(req.params.id);

      return res.json({mensage: "Usuário excluido com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }
}
