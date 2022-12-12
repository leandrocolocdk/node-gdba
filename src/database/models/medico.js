'use strict'

module.exports = (sequelize, DataTypes) => {

  let Medico = sequelize.define('medico', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    especialidad: {
      type: DataTypes.STRING,
    },
    tiempo_trabajando: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    freezeTableName: true,
  })

  Medico.associate = models => {
    Medico.hasMany(models.tratamiento)
    Medico.belongsTo(models.usuario)

  }

  return Medico
}

