module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
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
    prenom: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [2, 30]
      }
    },
    telephone: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        len: [2, 30]
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [2, 30]
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [2, 30]
      }
    },
    adresse: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [10, 50]
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
  });
  return Users;
};
