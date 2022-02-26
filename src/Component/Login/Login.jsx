import React, { useEffect } from "react";

import "./LoginStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useUserLoggedInOrNot } from "../../GlobalStore";

const Login = () => {
	const loggedIn = useUserLoggedInOrNot((state) => state.loggedIn);
	const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);

	// Functions

	const getUserLoggedInOrNot = () => {
		chageLoggedIn(false);
		console.log("userLoggedIn");
		chageLoggedIn(true);
	};

	// UseEffects

	useEffect(() => {
		// getUserLoggedInOrNot();
	}, []);
	return (
		<div>
			<div className="LoginOrRegisterComponents">
				<h2>Hi Login Here</h2>
				<div className="LoginOrRegisterComponentsDiv">
					<TextField
						className="LoginOrRegisterComponentsInput"
						id="outlined-textarea"
						label="Email"
						placeholder="Email"
						multiline
					/>
				</div>
				<div className="LoginOrRegisterComponentsDiv">
					<TextField
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
						onClick={getUserLoggedInOrNot}
					>
						Login
					</Button>
					<Button variant="outlined">Reset</Button>
				</div>
			</div>
		</div>
	);
};

export default Login;
