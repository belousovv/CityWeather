import { StateType } from "./store"

export const selectCity = (state: StateType) => {
    return state.search.city;
}