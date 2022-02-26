import React, { useState } from "react";

import "./LoginOrRegisterStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Login from "../Login/Login";
import Register from "../Register/Register";

const LoginOrRegister = () => {
	const [loginOrSignup, setLoginOrSignup] = useState(true);

	return (
		<div className="LoginOrRegister">
			<div className="LoginOrRegisterImage"></div>
			<div className="SignUpOrLoginOption">
				<div className="chageLoginOrSIgnup">
					<Button
						className="LoginOrRegisterComponentsDivButtonOne"
						variant="outlined"
						onClick={() => setLoginOrSignup(false)}
					>
						Register
					</Button>
					<Button onClick={() => setLoginOrSignup(true)} variant="outlined">
						Login
					</Button>
				</div>
			</div>
			{loginOrSignup ? (
				<div className="ComponentsOfLoginOrSignUp">
					<Login />
				</div>
			) : (
				<div className="ComponentsOfLoginOrSignUp">
					<Register />
				</div>
			)}
		</div>
	);
};

export default LoginOrRegister;
