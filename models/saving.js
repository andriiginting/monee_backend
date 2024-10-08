'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Saving.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    walletId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saving',
  });
  return Saving;
};