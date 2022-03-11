import { useEffect } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import LoginOrRegister from "./Component/LoginOrRegister/LoginOrRegister";

import axios from "axios";

import { useUserLoggedInOrNot, useUserDataStore } from "./GlobalStore";

function App() {
	// Zustand State
	const addUserData = useUserDataStore((state) => state.addUserData);

	const loggedIn = useUserLoggedInOrNot((state) => state.loggedIn);
	const chageLoggedIn = useUserLoggedInOrNot((state) => state.chageLoggedIn);

	// UseEffects
	useEffect(() => {
		getWeatherUerIsLoggedIn();
	}, []);
	// Functions
	const getWeatherUerIsLoggedIn = async () => {
		chageLoggedIn(false);
		const url = "http://localhost:8080/user/loggedInOrNot";
		const res = await axios.get(url, { withCredentials: true });
		addUserData({
			name: res.data.name,
			email: res.data.email,
			Id: res.data.Id,
		});
		if (res.data.message === "LoggedIn") chageLoggedIn(true);
		else chageLoggedIn(false);
	};

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
