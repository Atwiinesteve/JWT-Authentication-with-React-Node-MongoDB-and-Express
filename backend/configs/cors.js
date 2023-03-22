const corsOptions = {
	origin: ["http://localhost:3000"],
	methods: ["POST", "GET", "UPDATE", "PUT", "DELETE"],
	credentials: true,
};

module.exports = {corsOptions};