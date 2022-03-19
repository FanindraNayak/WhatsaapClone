import React, { useEffect, useState } from "react";

import "./LoginStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useUserLoggedInOrNot } from "../../GlobalStore";
import axios from "axios";

const Login = () => {
	const loggedIn = useUserLoggedInOrNot((state) => state.loggedIn);
	const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);

	const [loginData, setLoginData] = useState({
		email: "asd",
		password: "asd",
	});

	// Functions
	const loginFunction = async () => {
		const url = "http://localhost:8080/user/login";
		const res = await axios.post(url, loginData, {
			withCredentials: true,
			Credentials: "include",
		});
		if (res.data.message === "user Logged In") chageLoggedIn(true);
		else chageLoggedIn(false);
	};

	const handelChange = (e) =>
		setLoginData({ ...loginData, [e.target.name]: e.target.value });

	const clear = () => setLoginData({ email: "", password: "" });

	return (
		<div>
			<div className="LoginOrRegisterComponents">
				<h2>Hi Login Here</h2>
				<div className="LoginOrRegisterComponentsDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="email"
						value={loginData.email}
						className="LoginOrRegisterComponentsInput"
						id="outlined-textarea"
						label="Email"
						placeholder="Email"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterComponentsDiv">
					<TextField
						onChange={(e) => handelChange(e)}
						name="password"
						value={loginData.password}
						className="LoginOrRegisterComponentsInput"
						id="outlined-textarea"
						label="Password"
						placeholder="Password"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterComponentsDivButton">
					<Button
						className="LoginOrRegisterComponentsDivButtonOne"
						variant="outlined"
						onClick={loginFunction}
					>
						Login
					</Button>
					<Button onClick={clear} variant="outlined">
						Reset
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Login;
