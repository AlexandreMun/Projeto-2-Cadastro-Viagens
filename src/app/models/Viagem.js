import Sequelize, { Model } from "sequelize";

class Viagem extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        horario: Sequelize.STRING,
        destino: Sequelize.STRING,
        status: Sequelize.ENUM("Ativo", "Inativo"),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Passageiro, {
      foreignKey: "viagem_id",
      as: "passageiros",
    });
  }
}

export default Viagem;
