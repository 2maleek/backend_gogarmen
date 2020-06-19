const { User, Branch, Studio, Movie } = require("../models");
const { compare } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");

class Controller {
	static login(req, res) {
		let { username, password } = req.body;
		let role, UserId;
		if (!username || !password) {
			//empty username or password
			res.status(401).json({ message: "Invalid Login" });
		}

		User.findOne({
			where: { username }
		})
			.then(isFound => {
				if (!isFound) {
					res.status(401).json({ message: "Invalid Login" }); // user not registered
				}
				UserId = isFound.id;
				role = isFound.role;
				return compare(password, isFound.password);
			})
			.then(result => {
				if (!result) {
					res.status(401).json({ message: "Invalid Login" }); // wrong password
				}
				let token = jwt.sign(
					{
						UserId,
						username,
						role
					},
					process.env.SECRET || "gogarmen"
				);
				res.status(200).json({ token, role });
			})
			.catch(err => {
				res.status(500).json({ message: "Internal server error" });
			});
	}

	static logout(req, res) {
		let { token } = req.query;
		try {
			const decoded = jwt.verify(token, process.env.SECRET || "gogarmen");
			if (decoded) {
				res.status(200).json({ message: "logout success" });
			}
		} catch (error) {
			res.status(401).json({ message: "unauthorized user" });
		}
	}

	static createBranch(req, res) {
		const { name } = req.body;
		if (!name) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Branch.create({
				name
			}).then(newBranch => {
				res.status(200).json({ message: "create branch success" });
			});
		}
	}

	static updateBranch(req, res) {
		let branchId = Number(req.params.branchId);
		const { name } = req.body;
		if (!name) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Branch.update(
				{ name },
				{
					where: { id: branchId }
				}
			).then(updatedBranch => {
				res.status(200).json({ message: "update branch success" });
			});
		}
	}

	static deleteBranch(req, res) {
		let branchId = Number(req.params.branchId);
		Branch.destroy({
			where: { id: branchId }
		}).then(deleted => {
			res.status(200).json({ message: "delete branch success" });
		});
	}

	static findAllBranchs(req, res, next) {
		Branch.findAll()
			.then(branchs => {
				res.status(200).json(branchs);
			})
			.catch(err => {
				next(err);
			});
	}

	static createStudio(req, res) {
		const {
			name,
			BranchId,
			basicPrice,
			addFridayPrice,
			addSaturdayPrice,
			addSundayPrice
		} = req.body;

		if (
			(!name || !BranchId || !basicPrice || !addFridayPrice,
			!addSaturdayPrice,
			!addSundayPrice)
		) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Studio.create({
				name,
				BranchId,
				basicPrice,
				addFridayPrice,
				addSaturdayPrice,
				addSundayPrice
			}).then(newStudio => {
				res.status(200).json({ message: "create studio success" });
			});
		}
	}

	static updateStudio(req, res) {
		let studioId = Number(req.params.studioId);
		const {
			name,
			BranchId,
			basicPrice,
			addFridayPrice,
			addSaturdayPrice,
			addSundayPrice
		} = req.body;

		if (
			(!name || !BranchId || !basicPrice || !addFridayPrice,
			!addSaturdayPrice,
			!addSundayPrice)
		) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Studio.update(
				{
					name,
					BranchId,
					basicPrice,
					addFridayPrice,
					addSaturdayPrice,
					addSundayPrice
				},
				{
					where: { id: studioId }
				}
			).then(updatedStudio => {
				res.status(200).json({ message: "update Studio success" });
			});
		}
	}

	static deleteStudio(req, res) {
		let studioId = Number(req.params.studioId);
		Studio.destroy({
			where: { id: studioId }
		}).then(deleted => {
			res.status(200).json({ message: "delete Studio success" });
		});
	}

	static findAllStudios(req, res, next) {
		Studio.findAll()
			.then(studios => {
				res.status(200).json(studios);
			})
			.catch(err => {
				next(err);
			});
	}

	static createMovie(req, res) {
		const { name, minutesLength, picture } = req.body;
		if (!name || !minutesLength || !picture) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Movie.create({
				name,
				minutesLength,
				picture
			}).then(newMovie => {
				res.status(200).json({ message: "create Movie success" });
			});
		}
	}

	static updateMovie(req, res) {
		let movieId = Number(req.params.movieId);
		const { name } = req.body;
		if (!name || !minutesLength || !picture) {
			res.status(422).json({ message: "invalid field" });
		} else {
			Movie.update(
				{ name, minutesLength, picture },
				{
					where: { id: movieId }
				}
			).then(updatedMovie => {
				res.status(200).json({ message: "update movie success" });
			});
		}
	}

	static deleteMovie(req, res) {
		let movieId = Number(req.params.movieId);
		Movie.destroy({
			where: { id: movieId }
		}).then(deleted => {
			res.status(200).json({ message: "delete Movie success" });
		});
	}

	static findAllMovies(req, res, next) {
		Movie.findAll()
			.then(movies => {
				res.status(200).json(movies);
			})
			.catch(err => {
				next(err);
			});
	}
}

module.exports = Controller;
