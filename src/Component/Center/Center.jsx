import React from "react";
import CenterMessage from "../CenterMessage/CenterMessage";
import Lorem from "../Lorem/Lorem";
import "./CenterStyle.css";

import { useStore } from "../../GlobalStore";

const Center = () => {
	const eachIndividualMessages = [
		{
			id: "a1",
			message: "names of person",
			time: "time",
		},
		{
			id: "a2",
			message: "names of person",
			time: "time",
		},
		{
			id: "a3",
			message:
				"names of personnames of personnames of personnames of personnames of personnames of personnames of personnames of personnames of person",
			time: "time",
		},
		{
			id: "a4",
			message: "names of person",
			time: "time",
		},
		{
			id: "a5",
			message: "names of person",
			time: "time",
		},
	];

	// Zustand states

	const toggle = useStore((state) => state.toggle);
	const changeToggle = useStore((state) => state.changeToggle);

	// functions

	const getMessageData = () => {
		console.log("Got the required Data");
		changeToggle(false);
	};

	if (toggle) getMessageData();

	return (
		<div className="CenterMian">
			<br />

			<CenterMessage message="Somethings" time="time" />

			{eachIndividualMessages.map((value) => {
				return (
					<CenterMessage
						key={value.id}
						message={value.message}
						time={value.time}
					/>
				);
			})}
		</div>
	);
};

export default Center;
