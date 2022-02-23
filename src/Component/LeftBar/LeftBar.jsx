import React from "react";
import "./LeftBarStyle.css";

import SearchIcon from "@mui/icons-material/Search";
import Lorem from "../Lorem/Lorem";
import LeftBarChats from "../LeftBarChats/LeftBarChats";

const LeftBar = () => {
	return (
		<div className="LeftBarMain">
			<div className="LeftBarMainSearch">
				<div className="icon">
					<SearchIcon />
				</div>
				<input type="text" placeholder="Search ..." />
			</div>
			<div className="LeftBarMainChats">
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
				<LeftBarChats />
			</div>
		</div>
	);
};

export default LeftBar;
