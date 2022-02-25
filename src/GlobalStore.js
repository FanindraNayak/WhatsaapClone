import axios from "axios";
import create from "zustand";

const useStore = create((set) => ({
	toggle: false,
	changeToggle: (toggleValue) => set((state) => ({ toggle: toggleValue })),
}));

const useUserDataStore = create((set) => ({
	userData: [],
	getUserData: () => {
		const url = "";
		axios.get(url).then((res) => {
			console.log(res);
			set({ userData: res.data });
		});
	},
}));

const useUserLoggedInOrNot = create((set) => ({
	loggedIn: false,
	chageLoggedIn: (loggedInValue) =>
		set((state) => ({
			loggedIn: loggedInValue,
		})),
}));

export { useStore, useUserDataStore, useUserLoggedInOrNot };
