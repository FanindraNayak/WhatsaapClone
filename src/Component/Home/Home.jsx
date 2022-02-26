import React from "react";

import "./HomeStyle.css";

import { useUserLoggedInOrNot } from "../../GlobalStore";

import LeftBar from "../LeftBar/LeftBar";
import TopNav from "../TopNav/TopNav";
import Bottom from "../Bottom/Bottom.jsx";
import Center from "../Center/Center";
import TopLeft from "../TopLeft/TopLeft";

const Home = () => {
	// Zustand
	const loggedIn = useUserLoggedInOrNot((state) => state.loggedIn);
	// const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);
	console.log(loggedIn);
	return (
		<div className="Home">
			<div className="container">
				<div className="TopLeft">
					<TopLeft />
				</div>
				<div className="LeftBar">
					<LeftBar />
				</div>
				<div className="TopRight">
					<TopNav />
				</div>
				<div className="Bottom">
					<Bottom />
				</div>
				<div className="Center">
					<Center />
				</div>
			</div>
		</div>
	);
};

export default Home;
