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
	clearUserData: () => set({ userData: [] }),
	toUserIdForSendingMessage: "",
	setToUserId: (id) => {
		set((state) => ({
			toUserIdForSendingMessage: id,
		}));
	},
	userMessages: [],
	setUserMessage: (userMessagesFromDb) => {
		set((state) => ({
			userMessages: [userMessagesFromDb, ...state.userMessages],
		}));
	},
	clearUserMessage: () => set({ userMessages: [] }),
}));

const useUserLoggedInOrNot = create((set) => ({
	loggedIn: false,
	chageLoggedIn: (loggedInValue) =>
		set((state) => ({
			loggedIn: loggedInValue,
		})),
}));

const useMessageRefetchingToggle = create((set) => ({
	fetchMessage: false,
	changeMessageFetch: (toggleValue) =>
		set((state) => ({
			fetchMessage: toggleValue,
		})),
}));

export {
	useStore,
	useUserDataStore,
	useUserLoggedInOrNot,
	useMessageRefetchingToggle,
};
