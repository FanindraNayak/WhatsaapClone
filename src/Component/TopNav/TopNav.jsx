import React, { useEffect, useState } from "react";
import "./TopNavStyle.css";

import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useUserDataStore, useStore } from "../../GlobalStore";
import axios from "axios";

const TopNav = () => {
	// Zuestand

	const toUserIdForSendingMessage = useUserDataStore(
		(state) => state.toUserIdForSendingMessage
	);
	// console.log(toUserIdForSendingMessage);

	// Hooks

	const [onePersoneData, setOnePersonData] = useState([]);

	const getTheOneChatData = async () => {
		const url =
			"http://localhost:8080/user/OneUser/" + toUserIdForSendingMessage;
		const res = await axios(url, { withCredentials: true });
		setOnePersonData(res.data.message);
	};
	// console.log(onePersoneData);
	useEffect(() => {
		getTheOneChatData();
	}, [toUserIdForSendingMessage]);

	return (
		<div className="TopNavMain">
			<div className="TopNavMainAvatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</div>
			<div className="TopNavMainText">{onePersoneData.name}</div>
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
