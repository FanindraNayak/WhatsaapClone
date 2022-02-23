import React from "react";
import "./TopLeftStyle.css";

import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TopLeft = () => {
	return (
		<div className="TopLeftMain">
			<div className="TopLeftMainAvatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</div>
			<div className="TopLeftMainSpace"></div>
			<div className="TopLeftMainStatus">
				<AddCircleOutlineIcon />
			</div>
			<div className="TopLeftMainAdd">
				<AddIcon />
			</div>
			<div className="TopLeftMainMenu">
				<MoreHorizIcon />
			</div>
		</div>
	);
};

export default TopLeft;
