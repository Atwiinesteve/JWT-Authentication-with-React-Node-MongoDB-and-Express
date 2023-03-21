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
        const user = await User.findOne({ email: request.body.email });
        if(!user) {
            return response.status(404).json({ message: `User not registered yet..` })
        } else {
            const validPassword = await bcrypt.compare(request.body.password, user.password);
            if(validPassword) {
                const maxAge = 1*24*60*60;
                const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '1h'});
                response.cookie('token', token, { httpOnly: false, maxAge: maxAge*1000 });
                response.status(200).json({ message: `User Logged In Successfully..` })
            } else {
                return response.status(400).json({ message: `Invalid Email/Password..`})
            }
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

// controller exports
module.exports = {
	register,
	login,
};
