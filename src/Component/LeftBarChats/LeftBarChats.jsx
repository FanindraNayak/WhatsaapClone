import React from "react";
import "./LeftBarChatsStyle.css";

import Avatar from "@mui/material/Avatar";

const LeftBarChats = ({ name, message, time }) => {
	return (
		<div className="LeftBarChats">
			<div className="LeftBarChatsAvtar">
				<Avatar />
			</div>
			<div className="LeftBarChatsName">
				<p className="LeftBarChatsNameName">{name}</p>
				<p className="LeftBarChatsNameMessage">{message}</p>
			</div>
			<div className="LeftBarChatsTime">{time}</div>
		</div>
	);
};

export default LeftBarChats;
