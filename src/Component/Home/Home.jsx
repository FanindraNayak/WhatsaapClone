import React from "react";

import "./HomeStyle.css";

import LeftBar from "../LeftBar/LeftBar";
import TopNav from "../TopNav/TopNav";
import Bottom from "../Bottom/Bottom.jsx";
import Center from "../Center/Center";
import TopLeft from "../TopLeft/TopLeft";

const Home = () => {
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
