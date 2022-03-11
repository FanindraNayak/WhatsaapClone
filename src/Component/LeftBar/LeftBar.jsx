import React, { useEffect, useState } from "react";
import "./LeftBarStyle.css";

import axios from "axios";

import SearchIcon from "@mui/icons-material/Search";
// import Lorem from "../Lorem/Lorem";
import LeftBarChats from "../LeftBarChats/LeftBarChats";

const LeftBar = () => {
	const [allDataPersone, setAllDataPersone] = useState([]);

	const getAllData = async () => {
		const url = "http://localhost:8080/user/";
		const res = await axios.get(url, { withCredentials: true });
		setAllDataPersone(res.data.data);
	};
	// console.log(allDataPersone);

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
				{/* <LeftBarChats name="Sameer" message="Sameerasdsd" time="time" /> */}
				{allDataPersone.map((value) => {
					return (
						<div key={value._id} onClick={() => console.log(value)}>
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
