import axios from "axios";
import create from "zustand";

const useStore = create((set) => ({
	toggle: false,
	changeToggle: (toggleValue) => set((state) => ({ toggle: toggleValue })),
}));

const useUserDataStore = create((set) => ({
	userData: [],
	addUserData: (userInfo) => {
		set((state) => ({
			userData: [
				{
					name: userInfo.name,
					email: userInfo.email,
					Id: userInfo.Id,
				},
				...state.userData,
			],
		}));
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
