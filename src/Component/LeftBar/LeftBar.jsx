import React, { useEffect, useState } from "react";
import "./LeftBarStyle.css";

import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";
import LeftBarChats from "../LeftBarChats/LeftBarChats";

import { useUserDataStore, useStore } from "../../GlobalStore";

const LeftBar = () => {
	// Zustand
	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);

	console.log(toggle);
	const userData = useUserDataStore((state) => state.userData);

	const setUserMessage = useUserDataStore((state) => state.setUserMessage);
	const clearUserMessage = useUserDataStore((state) => state.clearUserMessage);

	const setToUserId = useUserDataStore((state) => state.setToUserId);
	// console.log(userData[0].Id);

	// Hooks

	const [allDataPersone, setAllDataPersone] = useState([]);

	const [sendMessageToUser, setSendMessageToUser] = useState({
		fromUserId: "",
		toUserId: "",
	});

	const getAllData = async () => {
		const url = "http://localhost:8080/user/";
		const res = await axios.get(url, { withCredentials: true });
		setAllDataPersone(
			res.data.data.filter((value) => value._id !== userData[0].Id)
		);
		// console.log();
	};

	const setMessThing = async (value) => {
		setSendMessageToUser({
			fromUserId: userData[0].Id,
			toUserId: value._id,
		});
	};

	// Function

	const getAllUserMessage = async () => {
		clearUserMessage();
		const url = "http://localhost:8080/message/userrMessagr";
		const res = await axios.post(url, sendMessageToUser);
		await res.data.message.map((value) => {
			setUserMessage(value);
			return 0;
		});
	};
	if (toggle !== true) {
		changeToggle(true);
		getAllUserMessage();
	}

	// UseEffect

	useEffect(() => {
		getAllData();
	}, []);
	return (
		<div className="LeftBarMain">
			<div className="LeftBarMainSearch">
				<div className="icon">
					<SearchIcon />
				</div>
				<input type="text" placeholder="Search ..." />
			</div>
			<div className="LeftBarMainChats">
				{allDataPersone.map((value) => {
					return (
						<div
							key={value._id}
							onClick={() => {
								// console.log(value);
								setToUserId(value._id);
								setMessThing(value);
								getAllUserMessage();
							}}
						>
							<LeftBarChats
								name={value.name}
								message={value.message}
								time={value.createdAt.slice(0, 9)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LeftBar;
