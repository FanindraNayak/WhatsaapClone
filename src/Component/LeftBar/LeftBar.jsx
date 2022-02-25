import React from "react";
import "./LeftBarStyle.css";

import SearchIcon from "@mui/icons-material/Search";
import Lorem from "../Lorem/Lorem";
import LeftBarChats from "../LeftBarChats/LeftBarChats";

const LeftBar = () => {
	const dataOfEachPerson = [
		{
			id: "asd1",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd2",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd3",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd4",
			name: "Sameeasdasr",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd5",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd6",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd7",
			name: "Sameer",
			message: "Messages",
			time: "time",
		},
		{
			id: "asd8",
			name: "Sameeasdasr",
			message: "Messages",
			time: "time",
		},
	];
	return (
		<div className="LeftBarMain">
			<div className="LeftBarMainSearch">
				<div className="icon">
					<SearchIcon />
				</div>
				<input type="text" placeholder="Search ..." />
			</div>
			<div className="LeftBarMainChats">
				<LeftBarChats name="Sameer" message="Sameerasdsd" time="time" />
				{dataOfEachPerson.map((value) => {
					return (
						<LeftBarChats
							key={value.id}
							name={value.name}
							message={value.message}
							time={value.time}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default LeftBar;
