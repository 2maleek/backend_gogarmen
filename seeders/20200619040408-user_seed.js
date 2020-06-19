"use strict";
const { hash } = require("../helpers/bcrypt");
let pass1, pass2, pass3;

module.exports = {
	up: (queryInterface, Sequelize) => {
		return hash("admin1")
			.then(encrypted1 => {
				pass1 = encrypted1;
				return hash("admin2");
			})
			.then(encripted2 => {
				pass2 = encripted2;
				return hash("user1");
			})
			.then(encrypted3 => {
				pass3 = encrypted3;
				return queryInterface.bulkInsert(
					"Users",
					[
						{
							username: "admin1",
							password: pass1,
							role: "admin",
							createdAt: new Date(),
							updatedAt: new Date()
						},
						{
							username: "admin2",
							password: pass2,
							role: "admin",
							createdAt: new Date(),
							updatedAt: new Date()
						},
						{
							username: "user1",
							password: pass3,
							role: "user",
							createdAt: new Date(),
							updatedAt: new Date()
						}
					],
					{}
				);
			});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	}
};
