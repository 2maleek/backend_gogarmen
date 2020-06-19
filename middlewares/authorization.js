const { User } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const decoded = jwt.verify(
			req.query.token,
			process.env.SECRET || "gogarmen"
		);

		if (decoded.role !== "admin") {
			res.status(403).json({ message: "forbidden user access" });
		} else {
			next();
		}
		req.user = decoded;
	} catch (error) {
		res.status(401).json({ message: "unauthorized user" });
	}
};
