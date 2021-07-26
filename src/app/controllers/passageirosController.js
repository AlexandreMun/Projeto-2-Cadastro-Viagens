import Passageiro from "../models/Passageiro";

class passageirosController {
  // Mostrar todos
  async index(req, res) {
    try {
      const data = await Passageiro.findAll({ limit: 1000 });

      return res.json(data);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Mostrar apenas um por Id
  async show(req, res) {
    try {
      const id = parseInt(req.params.id);
      const passageiro = await Passageiro.findByPk(id);
      const status = passageiro ? 200 : 404;

      return res.status(status).json(passageiro);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Criar
  async create(req, res) {
    try {
      const { nome, cpf, endereco, telefone, email, viagem_id } = req.body;
      const novoPassageiro = await Passageiro.create({
        nome,
        cpf,
        endereco,
        telefone,
        email,
        viagem_id,
      });

      return res.status(201).json(novoPassageiro);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Atualizar
  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { nome, cpf, endereco, telefone, email, viagem_id } = req.body;

      const status = id >= 0 ? 200 : 404;

      const passageiro = await Passageiro.findByPk(id);
      const atualizarPassageiro = await passageiro.update({
        nome,
        cpf,
        endereco,
        telefone,
        email,
        viagem_id,
      });

      return res.status(status).json(atualizarPassageiro);
    } catch (e) {
      console.log("Erro: ", e);
    }
  }

  // Deletar
  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      const passageiro = await Passageiro.findByPk(id);
      const status = id >= 0 ? 200 : 404;

      passageiro.destroy();

      return res.status(status).json();
    } catch (e) {
      console.log("Erro: ", e);
    }
  }
}

export default new passageirosController();
