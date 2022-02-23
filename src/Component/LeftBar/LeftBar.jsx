import React from "react";
import "./LeftBarStyle.css";

import SearchIcon from "@mui/icons-material/Search";
import Lorem from "../Lorem/Lorem";

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
				<Lorem />
				<Lorem />
				<Lorem />
				<Lorem />
				<Lorem />
				<Lorem />
				<Lorem />
			</div>
		</div>
	);
};

export default LeftBar;
