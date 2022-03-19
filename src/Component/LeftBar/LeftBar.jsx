import React, { useEffect, useState } from "react";
import "./LeftBarStyle.css";

import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";
import LeftBarChats from "../LeftBarChats/LeftBarChats";

import {
	useUserDataStore,
	useStore,
	useMessageRefetchingToggle,
} from "../../GlobalStore";
import { isOptionGroup } from "@mui/base";

const LeftBar = () => {
	// Zustand
	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);

	const userData = useUserDataStore((state) => state.userData);

	const setUserMessage = useUserDataStore((state) => state.setUserMessage);
	const clearUserMessage = useUserDataStore((state) => state.clearUserMessage);

	const setToUserId = useUserDataStore((state) => state.setToUserId);

	const fetchMessage = useMessageRefetchingToggle(
		(state) => state.fetchMessage
	);
	const changeMessageFetch = useMessageRefetchingToggle(
		(state) => state.changeMessageFetch
	);

	// Hooks
	// console.log(fetchMessage);
	const [dataLoding, setDataloading] = useState(false);
	const [allDataPersone, setAllDataPersone] = useState([]);

	const [sendMessageToUser, setSendMessageToUser] = useState({
		fromUserId: userData[0].Id,
		toUserId: "",
	});

	const getAllData = async () => {
		setDataloading(true);
		setAllDataPersone([]);
		const url = "http://localhost:8080/user/";
		const res = await axios.get(url, { withCredentials: true });
		const allUserInApp = await res.data.data;
		setAllDataPersone(allUserInApp);
		// console.log(allDataPersone);
		// console.log();
		setDataloading(false);
	};

	const setMessThing = async (ID) => {
		// console.log(ID);
		setToUserId(ID);
		setSendMessageToUser({ ...sendMessageToUser, toUserId: ID });
	};

	// Function

	const getAllUserMessage = async () => {
		await changeMessageFetch(true);
		// console.warn(sendMessageToUser);
		await clearUserMessage();
		const url = "http://localhost:8080/message/userrMessagr";
		const res = await axios.post(url, sendMessageToUser);
		await res.data.message.map(
			(value) => setUserMessage(value)
			// return 0;
		);
		// await changeMessageFetch(false);
	};

	if (toggle !== true) {
		getAllUserMessage();
		changeToggle(true);
		changeMessageFetch(true);
	}

	// Working on the error of need to double click to get the messages i dont know why it is happening
	// setTimeout(() => {
	// 	if (fetchMessage !== true) {
	// 		getAllUserMessage();
	// 		// changeToggle(true);
	// 		changeMessageFetch(true);
	// 	}
	// }, 1000);
	// UseEffect

	useEffect(() => {
		getAllData();
	}, []);
	if (dataLoding) return <h1>hi</h1>;
	else
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
								onClick={async () => {
									await setMessThing(value._id);
									await getAllUserMessage();
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
