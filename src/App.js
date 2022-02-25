import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import LoginOrRegister from "./Component/LoginOrRegister/LoginOrRegister";

import { useUserLoggedInOrNot } from "./GlobalStore";

function App() {
	// Zustand State

	const loggedIn = useUserLoggedInOrNot((state) => state.loggedIn);
	const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);

	console.log(loggedIn);
	const getWeatherUerIsLoggedIn = () => {
		chageLoggedIn(false);
		console.log("got data");
		// chageLoggedIn(true);
	};
	useEffect(() => {
		getWeatherUerIsLoggedIn();
	}, []);
	return (
		<div className="App">
			{loggedIn === false ? (
				<div className="AppLoginAndRegister">
					<LoginOrRegister />
				</div>
			) : (
				<Home />
			)}
		</div>
	);
}

export default App;
