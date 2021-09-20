import { StateType } from "./store";

export const selectTemp = (state: StateType) => {
    return Math.floor(state.weather.main.temp - 273)
}