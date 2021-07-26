"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("passageiros", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone: Sequelize.STRING,
      email: Sequelize.STRING,
      status: {
        type: Sequelize.ENUM("Ativo", "Inativo"),
        allowNull: false,
        defaultValue: "Ativo",
      },
      viagem_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "viagem",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("passageiros");
  },
};
