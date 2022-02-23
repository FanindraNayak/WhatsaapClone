import React from "react";
import "./LeftBarChatsStyle.css";

import Avatar from "@mui/material/Avatar";

const LeftBarChats = () => {
	return (
		<div className="LeftBarChats">
			<div className="LeftBarChatsAvtar">
				<Avatar />
			</div>
			<div className="LeftBarChatsName">
				<p className="LeftBarChatsNameName">name</p>
				<p className="LeftBarChatsNameMessage">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
					dignissimos perferendis fugiat et. Autem, labore unde. Fugit porro
					magni perspiciatis quae commodi, rem voluptates numquam repellat minus
					perferendis vero, sit amet corrupti veritatis dolores odit! Ipsum,
					cumque ipsa exercitationem beatae ipsam nemo laboriosam sint sunt,
					esse ullam veritatis accusantium corporis deleniti repellendus facere
					voluptatum. Velit doloremque accusamus a consequatur, facere totam
					expedita quos ea qui repellat cumque omnis, ad quam quaerat
					perspiciatis nulla ab? Repudiandae sit non, soluta possimus aspernatur
					similique deserunt illum minima nulla eos culpa libero deleniti, at
					ullam reprehenderit. Amet ipsum nobis est provident facilis neque
					voluptatem.
				</p>
			</div>
			<div className="LeftBarChatsTime">Time</div>
		</div>
	);
};

export default LeftBarChats;
