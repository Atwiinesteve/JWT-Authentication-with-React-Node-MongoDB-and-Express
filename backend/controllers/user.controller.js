// importing modules
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import user model
const User = require("../models/user.model");

// register controller
const register = async (request, response) => {
	try {
		const user = await User.findOne({ email: request.body.email });
		if (user) {
			return response.status(404).json({ message: `User Already Exists` });
		} else {
			const salt = await bcrypt.genSalt(15);
			const hash = await bcrypt.hash(request.body.password, salt);
			const user = User({
				email: request.body.email,
				password: hash,
			});
			user
				.save()
				.then((user) => {
					response.json({ message: user });
				})
				.catch((error) => {
					console.log({
						name: error.name,
						message: error.message,
						stack: error.stack,
					});
					return response
						.status(500)
						.json({
							message: `Server Under Maintenance. Please try again later..`,
						});
				});
		}
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({ message: `Server Under Maintenance. Please try again later..` });
	}
};

// login controller
const login = async (request, response) => {
	try {
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({ message: `Server Under Maintenance. Please try again later..` });
	}
};

// controller exports
module.exports = {
	register,
	login,
};
