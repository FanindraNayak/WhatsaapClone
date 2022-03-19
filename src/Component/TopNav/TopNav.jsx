import React, { useEffect, useState } from "react";
import "./TopNavStyle.css";

import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
	useUserDataStore,
	useStore,
	useUserLoggedInOrNot,
} from "../../GlobalStore";
import axios from "axios";

const TopNav = () => {
	// Zuestand

	const toUserIdForSendingMessage = useUserDataStore(
		(state) => state.toUserIdForSendingMessage
	);
	const clearUserData = useUserDataStore((state) => state.clearUserData);

	const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);

	// console.log(toUserIdForSendingMessage);

	// Hooks

	const [onePersoneData, setOnePersonData] = useState([]);

	const [showRightMenu, setShowRightMenu] = useState(false);

	const getTheOneChatData = async () => {
		if (toUserIdForSendingMessage.length < 3) {
			console.log("nope");
		} else {
			const url =
				"http://localhost:8080/user/OneUser/" + toUserIdForSendingMessage;
			const res = await axios(url, { withCredentials: true });
			// console.log(res.data);
			setOnePersonData(res.data.message);
		}
	};
	// console.log(onePersoneData);

	const logouutFunction = async () => {
		// console.log(onePersoneData);
		const url = "http://localhost:8080/user/logout";
		const res = await axios.get(url, { withCredentials: true });
		console.log("his");
		if (res.data.message === "LoggedOut") {
			chageLoggedIn(false);
			// clearUserData();
		}
	};
	// console.log(onePersoneData);
	useEffect(() => {
		getTheOneChatData();
	}, [toUserIdForSendingMessage]);

	return (
		<div className="TopNavMain">
			{showRightMenu === false ? (
				<div className="TopNavMainAvatar">
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</div>
			) : null}
			<div className="TopNavMainText">{onePersoneData.name}</div>
			<div className="TopNavMainSearch">
				<SearchIcon />
			</div>
			<div className="TopNavMainMenu">
				{showRightMenu === true ? (
					<div
						className="TopNavMainMenuRightSection"
						// style={{ zIndex: 10, backgroundColor: "red" }}
					>
						<ul>
							<li
								onClick={() => {
									console.log(showRightMenu);
									setShowRightMenu(false);
								}}
							>
								Close
							</li>
							<li
								onClick={() => {
									logouutFunction();
								}}
							>
								logout
							</li>
						</ul>
					</div>
				) : (
					<MoreHorizIcon
						onClick={() => {
							setShowRightMenu(true);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default TopNav;
