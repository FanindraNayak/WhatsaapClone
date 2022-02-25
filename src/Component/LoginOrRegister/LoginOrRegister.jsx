import React, { useState } from "react";

import "./LoginOrRegisterStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginOrRegister = () => {
	const [loginOrSignup, setLoginOrSignup] = useState(true);
	return (
		<div className="LoginOrRegister">
			<div className="LoginOrRegisterImage"></div>
			{loginOrSignup ? (
				<div className="LoginOrRegisterComponents">
					<div className="chageLoginOrSIgnup">
						<Button
							className="LoginOrRegisterComponentsDivButtonOne"
							variant="outlined"
							onClick={() => setLoginOrSignup(true)}
						>
							Login
						</Button>
						<Button onClick={() => setLoginOrSignup(false)} variant="outlined">
							Register
						</Button>
					</div>
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
						>
							Login
						</Button>
						<Button variant="outlined">Reset</Button>
					</div>
				</div>
			) : (
				<div className="LoginOrRegisterSignUpComponent">
					<div className="chageLoginOrSIgnup">
						<Button
							className="LoginOrRegisterComponentsDivButtonOne"
							variant="outlined"
							onClick={() => setLoginOrSignup(true)}
						>
							Login
						</Button>
						<Button onClick={() => setLoginOrSignup(false)} variant="outlined">
							Register
						</Button>
					</div>
					<h2>Hi Sign Up</h2>
					<div className="LoginOrRegisterSignUpComponentDiv">
						<TextField
							className="LoginOrRegisterSignUpComponentInput"
							id="outlined-textarea"
							label="User Name"
							placeholder="User Name"
							multiline
						/>
					</div>
					<div className="LoginOrRegisterSignUpComponentDiv">
						<TextField
							className="LoginOrRegisterSignUpComponentInput"
							id="outlined-textarea"
							label="Email"
							placeholder="Email"
							multiline
						/>
					</div>
					<div className="LoginOrRegisterSignUpComponentDiv">
						<TextField
							className="LoginOrRegisterSignUpComponentInput"
							id="outlined-textarea"
							label="Password"
							placeholder="Password"
							multiline
						/>
					</div>
					<div className="LoginOrRegisterSignUpComponentDiv">
						<TextField
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
						>
							Register
						</Button>
						<Button variant="outlined">Reset</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default LoginOrRegister;
