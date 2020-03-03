module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produits", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      prix: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantite: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      description: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING(400)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("produits");
  }
};
