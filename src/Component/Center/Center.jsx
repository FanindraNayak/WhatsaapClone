import React, { useEffect, useState } from "react";
import CenterMessage from "../CenterMessage/CenterMessage";
// import Lorem from "../Lorem/Lorem";
import "./CenterStyle.css";

import { useStore, useUserDataStore } from "../../GlobalStore";
// import axios from "axios";

const Center = () => {
	// const eachIndividualMessages = [
	// 	{
	// 		id: "a1",
	// 		message: "names of person",
	// 		time: "time",
	// 	},
	// 	{
	// 		id: "a2",
	// 		message: "names of person",
	// 		time: "time",
	// 	},
	// 	{
	// 		id: "a3",
	// 		message:
	// 			"names of personnames of personnames of personnames of personnames of personnames of personnames of personnames of personnames of person",
	// 		time: "time",
	// 	},
	// 	{
	// 		id: "a4",
	// 		message: "names of person",
	// 		time: "time",
	// 	},
	// 	{
	// 		id: "a5",
	// 		message: "names of person",
	// 		time: "time",
	// 	},
	// ];

	const [eachIndividualMessages, setEachIndividuaData] = useState([]);
	// Zustand states

	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);

	const userMessages = useUserDataStore((state) => state.userMessages);

	const getMeeagesss = async () => {
		const data = await userMessages;
		setEachIndividuaData(data);
		// console.log(data);
	};

	useEffect(() => {
		getMeeagesss();
	}, [userMessages]);
	return (
		<div className="CenterMian">
			<br />

			{/* <CenterMessage message="Somethings" time="time" /> */}

			{eachIndividualMessages.map((value) => {
				return (
					<CenterMessage
						key={value._id}
						message={value.message}
						time={value.createdAt}
					/>
				);
			})}
		</div>
	);
};

export default Center;
