import {atom} from "recoil";

export const idState = atom<string | null>({
    key: "idState",
    default: null
})
