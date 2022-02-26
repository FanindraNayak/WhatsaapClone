import React from "react";

import "./RegisterStyle.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
	return (
		<div>
			<div className="LoginOrRegisterSignUpComponent">
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
		</div>
	);
};

export default Register;
