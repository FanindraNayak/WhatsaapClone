import React from "react";
import "./CenterMessageStyle.css";
const CenterMessage = ({ message, time }) => {
	return (
		<div className="CenterMessageMain">
			{message.length < 100 ? (
				<div
					style={{ width: "20vw", height: "10vh" }}
					className="CenterMessageMainShapes"
				>
					<p className="Message">{message}</p>
					<p className="MessageTime">{time}</p>
				</div>
			) : (
				<div className="CenterMessageMainShapes">
					<p className="Message">{message}</p>
					<p className="MessageTime">{time}</p>
				</div>
			)}
		</div>
	);
};

export default CenterMessage;
