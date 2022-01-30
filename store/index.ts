import { atom } from "recoil";

const profileState = atom({
	key: "profileState",
	default: "new guy",
});

export default profileState;
