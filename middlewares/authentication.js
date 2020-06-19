const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const decoded = jwt.verify(
			req.query.token,
			process.env.SECRET || "gogarmen"
		);
		User.findOne({
			where: { username: decoded.username }
		})
			.then(isFound => {
				if (!isFound) {
					res.status(401).json({ message: "unauthorized user" }); //check valid token but user not registered
				} else {
					next();
				}
				req.user = decoded;
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({ message: "internal server error" });
			});
	} catch (error) {
		res.status(401).json({ message: "unauthorized user" });
	}
};
