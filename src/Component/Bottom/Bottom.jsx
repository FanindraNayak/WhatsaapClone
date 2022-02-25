import React, { useState } from "react";
import "./BottomStyle.css";

import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { useStore } from "../../GlobalStore";

const Bottom = () => {
	// Local States
	const [message, setMessage] = useState({
		id: "ads",
		message: "",
		time: new Date().toLocaleString(),
	});

	// Zustand States
	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);
	console.log(toggle);
	// Functions

	const submitMessages = () => {
		changeToggle(false);
		setMessage({
			id: "ads",
			message: "",
			time: new Date().toLocaleString(),
		});
		changeToggle(true);
	};

	return (
		<div className="BottomMain">
			<div className="BottomMainEmoji">
				<InsertEmoticonIcon />
			</div>
			<div className="BottomMainFile">
				<AttachFileIcon />
			</div>
			<div className="BottomMainInput">
				<input
					type="text"
					value={message.message}
					onChange={(e) => setMessage({ ...message, message: e.target.value })}
				/>
			</div>
			<div className="BottomMainMic" onClick={submitMessages}>
				<SendIcon />
			</div>
		</div>
	);
};

export default Bottom;
