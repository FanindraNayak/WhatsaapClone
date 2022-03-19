import React, { useState, useEffect } from "react";
import "./TopLeftStyle.css";

import axios from "axios";

import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useUserDataStore } from "../../GlobalStore";

const TopLeft = () => {
	const userData = useUserDataStore((state) => state.userData);

	const [showProfile, setShowProfile] = useState(false);

	return (
		<div className="">
			{showProfile === false ? (
				<div className="TopLeftMain">
					<div
						className="TopLeftMainAvatar"
						onClick={() => setShowProfile(true)}
					>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</div>
					<div className="TopLeftMainSpace"></div>
					<div className="TopLeftMainStatus">
						<AddCircleOutlineIcon />
					</div>
					<div className="TopLeftMainAdd">
						<AddIcon />
					</div>
					<div className="TopLeftMainMenu">
						<MoreHorizIcon />
					</div>
				</div>
			) : (
				<div className="TopLeftMain">
					<div className="TopLeftMainProfile">
						<div
							className="TopLeftMainProfileClose"
							onClick={() => setShowProfile(false)}
						>
							<h2>Close</h2>
						</div>
						<div className="TopLeftMainProfileNameAndPicture">
							<div className="TopLeftMainProfilePicture">
								<Avatar
									sx={{ height: "140px", width: "140px" }}
									alt="Remy Sharp"
									src="/static/images/avatar/1.jpg"
								/>
							</div>
							<p>
								{userData[0].name[0].toUpperCase() + userData[0].name.slice(1)}
							</p>
						</div>
					</div>
				</div>
			)}
			{/* <div className="TopLeftMainSpace"></div>
			<div className="TopLeftMainStatus">
				<AddCircleOutlineIcon />
			</div>
			<div className="TopLeftMainAdd">
				<AddIcon />
			</div>
			<div className="TopLeftMainMenu">
				<MoreHorizIcon />
			</div> */}
		</div>
	);
};

export default TopLeft;
