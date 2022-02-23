import React from "react";
import "./TopNavStyle.css";

import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TopNav = () => {
	return (
		<div className="TopNavMain">
			<div className="TopNavMainAvatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</div>
			<div className="TopNavMainText">aasd</div>
			<div className="TopNavMainSearch">
				<SearchIcon />
			</div>
			<div className="TopNavMainMenu">
				<MoreHorizIcon />
			</div>
		</div>
	);
};

export default TopNav;
