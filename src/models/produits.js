module.exports = (sequelize, DataTypes) => {
  const Produits = sequelize.define(
    "Produits",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 30]
        }
      },
      prix: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true
        }
      },
      quantite: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true
        }
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 300]
        }
      },
      photo: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 30]
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },
    {
      tableName: "produits"
    }
  );

  /*   Produits.associate = models => {
    Produits.belongnsTo(models.)
  } */

  return Produits;
};
