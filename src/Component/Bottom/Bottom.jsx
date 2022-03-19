import React, { useState } from "react";
import "./BottomStyle.css";

import axios from "axios";

import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { useStore, useUserDataStore } from "../../GlobalStore";

const Bottom = () => {
	// Local States
	const [message, setMessage] = useState({
		fromUserId: "",
		toUserId: "",
		message: "",
	});

	// Zustand States
	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);

	const userData = useUserDataStore((state) => state.userData);
	const toUserIdForSendingMessage = useUserDataStore(
		(state) => state.toUserIdForSendingMessage
	);

	// console.log(toUserIdForSendingMessage);
	// Functions

	const submitMessages = async () => {
		if (message.toUserId.length > 5)
			console.log("User to send id is less tehn 5");
		// console.log(toggle);
		changeToggle(false);
		// console.log(toggle);
		console.log(toUserIdForSendingMessage);
		// setTimeout(() => {
		setMessage({
			fromUserId: userData[0].Id,
			toUserId: toUserIdForSendingMessage,
			message: "",
		});
		// }, 0);
		const url = "http://localhost:8080/message/message";
		await axios.post(url, message);
	};

	const hadelInputChange = async (e) => {
		// console.log(e);
		setMessage({ ...message, message: e.target.value });
	};

	const handelEnterKey = async (e) => {
		if (e.code === "Enter") {
			submitMessages();
		}
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
					onChange={(e) => hadelInputChange(e)}
					onKeyDown={(e) => handelEnterKey(e)}
				/>
			</div>
			<div className="BottomMainMic" onClick={submitMessages}>
				<SendIcon />
			</div>
		</div>
	);
};

export default Bottom;
