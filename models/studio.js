'use strict';
module.exports = (sequelize, DataTypes) => {
  const Studio = sequelize.define('Studio', {
    name: DataTypes.STRING,
    BranchId: DataTypes.INTEGER,
    basicPrice: DataTypes.INTEGER,
    addFridayPrice: DataTypes.INTEGER,
    addSaturdayPrice: DataTypes.INTEGER,
    addSundayPrice: DataTypes.INTEGER
  }, {});
  Studio.associate = function(models) {
    // associations can be defined here
  };
  return Studio;
};