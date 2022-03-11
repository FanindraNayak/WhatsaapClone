import React, { useState } from "react";

import "./RegisterStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Register = () => {
	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		password: "",
		cPassword: "",
	});

	const handelChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	};

	const registerUser = async () => {
		const url = "http://localhost:8080/user/register";
		const res = await axios.post(url, registerData);
		console.log(res.data);
		clear();
	};

	const clear = () =>
		setRegisterData({
			name: "",
			email: "",
			password: "",
			cPassword: "",
		});

	// console.log(registerData);
	return (
		<div>
			<div className="LoginOrRegisterSignUpComponent">
				<h2>Hi Sign Up</h2>
				<div className="LoginOrRegisterSignUpComponentDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="name"
						value={registerData.name}
						className="LoginOrRegisterSignUpComponentInput"
						id="outlined-textarea"
						label="User Name"
						placeholder="User Name"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterSignUpComponentDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="email"
						value={registerData.email}
						className="LoginOrRegisterSignUpComponentInput"
						id="outlined-textarea"
						label="Email"
						placeholder="Email"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterSignUpComponentDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="password"
						value={registerData.password}
						className="LoginOrRegisterSignUpComponentInput"
						id="outlined-textarea"
						label="Password"
						placeholder="Password"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterSignUpComponentDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="cPassword"
						value={registerData.cPassword}
						className="LoginOrRegisterSignUpComponentInput"
						id="outlined-textarea"
						label="Confirm Password"
						placeholder="Confirm Password"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterSignUpComponentDivButton">
					<Button
						className="LoginOrRegisterSignUpComponentDivButtonOne"
						variant="outlined"
						onClick={registerUser}
					>
						Register
					</Button>
					<Button onClick={clear} variant="outlined">
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Register;
