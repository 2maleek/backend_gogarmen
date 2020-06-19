'use strict';
module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define('Branch', {
    name: DataTypes.STRING
  }, {});
  Branch.associate = function(models) {
    // associations can be defined here
  };
  return Branch;
};