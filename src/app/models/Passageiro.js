import Sequelize, { Model } from "sequelize";

class Passageiro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        endereco: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.ENUM("Ativo", "Inativo"),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Viagem, {
      foreignKey: "viagem_id",
      as: "viagem",
    });
  }
}

export default Passageiro;
