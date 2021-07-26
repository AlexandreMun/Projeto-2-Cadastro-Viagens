import Viagem from "../models/Viagem";

class viagensController {
  // Passageiros de uma viagem
  async indexPassageiros(req, res) {
    try {
      const { viagem_id } = req.params;

      const viagem = await Viagem.findByPk(viagem_id, {
        include: { association: "passageiros" },
      });

      return res.json(viagem);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Viagens inativas
  async inativas(req, res) {
    try {
      const viagens = await Viagem.findAll({
        where: { status: "Inativo" },
      });

      return res.json(viagens);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Mostrar todos
  async index(req, res) {
    try {
      const data = await Viagem.findAll({ limit: 1000 });

      return res.json(data);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Mostrar apenas um por Id
  async show(req, res) {
    try {
      const id = parseInt(req.params.id);
      const viagem = await Viagem.findByPk(id);
      const status = viagem ? 200 : 404;

      return res.status(status).json(viagem);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Criar
  async create(req, res) {
    try {

      const { data, horario, destino } = req.body;

      const novaViagem = await Viagem.create({
        data,
        horario,
        destino,
      });

      return res.status(201).json(novaViagem);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Atualizar
  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { data, horario, destino } = req.body;

      const status = id >= 0 ? 200 : 404;

      const viagem = await Viagem.findByPk(id);
      const atualizarViagem = await viagem.update({
        data,
        horario,
        destino,
      });

      return res.status(status).json(atualizarViagem);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Deletar
  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const viagem = await Viagem.findByPk(id);
      const status = id >= 0 ? 200 : 404;

      viagem.destroy();

      return res.status(status).json();
    } catch (e) {
      console.log("Erro: ", e);
    }
  }
}

export default new viagensController();
