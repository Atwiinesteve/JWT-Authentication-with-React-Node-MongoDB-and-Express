import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

// register component.
export default function Register() {

	// navigation
	const navigate = useNavigate();

	// input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// success message
	const successMessage = () => {
		toast.success("User Successfully registered..", {
			position: toast.POSITION.TOP_RIGHT
		});
	};

	// user not registered/already registered message
	// const userAlreadyRegistered = () => {
	// 	toast.warning("User Already Registered", {
	// 		position: toast.POSITION.TOP_RIGHT
	// 	});
	// };

	// server under maintenance mode message
	const serverUnderMaintenace = () => {
		toast.info("Server Shutdown, Please try again later..", {
			position: toast.POSITION.TOP_RIGHT
		});
	};

	// missing input
	const missingInput = (err) => {
		toast.error(err, {
			position: toast.POSITION.TOP_RIGHT
		})
	}

  // on submit data
  async function handleSubmit(e) {
    e.preventDefault();
    try {
		await axios.post('http://localhost:7070/register', { email, password })
		.then((response) => {
			if(response.status === 200) {
				navigate('/login')
				successMessage();
			}
		})
    	.catch((error) => {
			if(error.response.data) {
				missingInput();
			}
		})
    } catch (error) {
		serverUnderMaintenace();
    }
  }

	// return component elemts
	return (
		<>
			<div className="container">
				<h2>Register Account</h2>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit">Register</button>
					<span>
						<p>
							Already have an account? <Link to={"/login"}>Login</Link> here
						</p>
					</span>
				</form>
				<ToastContainer />
			</div>
		</>
	);
}
