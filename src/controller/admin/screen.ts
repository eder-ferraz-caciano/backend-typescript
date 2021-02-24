import { Screen } from "../../models/Screen";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import validate from "validate.js";
// import dayjs from "dayjs";

export default class ScreenController {
  constructor () {
  }

  private SaveValidate = {
    name: { presence: { allowEmpty: false } },
    description: { presence: { allowEmpty: false } },
    url: { presence: { allowEmpty: false } },
    icon: { presence: { allowEmpty: false } },
    order: { presence: { allowEmpty: false } },
    icon_color: { presence: { allowEmpty: false } },
  };
  private EditValidate = {
      id: { presence: { allowEmpty: false, numericality: true } },
      ...this.SaveValidate
  };

  public onList = async (req: Request, res: Response) => {
    try {
      const repo = getRepository(Screen);
      const registros = await repo.find({
        where: { deleted_at: null }
      });

      return res.json(registros);
    } catch (error) {
      return res.json({ erro: error });
    }
  }

  public onView = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) return res.json({ erro: "Tela não informada!"});

      const repo = getRepository(Screen);
      const registro = await repo.findOne(req.params.id);

      if (!registro) return res.json({ erro: "Tela não encontrada!"});

      return res.json(registro);
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onSave = async (req: Request, res: Response) => {
    try {
      let erro = validate(req.body, this.SaveValidate);
      if (erro) return res.json({ erro: erro });

      const repo = getRepository(Screen);
      const telaJaCadastrada = await repo.find({
        where: {
          deleted_at: null,
          url: req.body.url
        }
      });
      if (telaJaCadastrada && telaJaCadastrada.length) return res.json({ erro: "Tela já cadastrado com essa url"});

      const screen = repo.create({
        name: req.body.name.toUpperCase(),
        description: req.body.description.toUpperCase(),
        url: req.body.url || "",
        icon: req.body.icon || "",
        order: req.body.order || null,
        icon_color: req.body.icon_color || ""
      })

      await repo.save(screen);

      return res.json({mensage: "Tela cadastrada com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onEdit = async (req: Request, res: Response) => {
    try {
      let erro = validate(req.body, this.EditValidate);
      if (erro) return res.json({ erro: erro });

      const repo = getRepository(Screen);
      const telaJaCadastrada = await repo.find({
        where: {
          deleted_at: null,
          id: req.body.id
        }
      });
      if (!telaJaCadastrada) return res.json({ erro: "Tela não encontrada!"});

      const screen = repo.create({
        name: req.body.name.toUpperCase(),
        description: req.body.description.toUpperCase(),
        url: req.body.url || "",
        icon: req.body.icon || "",
        order: req.body.order || null,
        icon_color: req.body.icon_color || ""
      })

      await repo.update(req.body.id, screen);

      return res.json({mensage: "Tela alterada com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }

  public onDelete = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) return res.json({erro: "Tela não informada"});

      const repo = getRepository(Screen);
      const telaJaCadastrada = await repo.find({
        where: {
          deleted_at: null,
          id: req.params.id
        }
      });
      if (!telaJaCadastrada) return res.json({erro: "Tela não encontrada!"});

      await repo.softDelete(req.params.id);

      return res.json({mensage: "Tela excluída com sucesso!"});
    } catch (error) {
      return res.json({erro: error});
    }
  }
}
