import React from "react";
import "./BottomStyle.css";

import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Bottom = () => {
	return (
		<div className="BottomMain">
			<div className="BottomMainEmoji">
				<InsertEmoticonIcon />
			</div>
			<div className="BottomMainFile">
				<AttachFileIcon />
			</div>
			<div className="BottomMainInput">
				<input type="text" />
			</div>
			<div className="BottomMainMic">
				<SendIcon />
			</div>
		</div>
	);
};

export default Bottom;
