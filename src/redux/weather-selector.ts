import { StateType } from "./store";

export const selectTemp = (state: StateType) => {
    return Math.floor(state.weather.main.temp - 273)
}

export const selectDescription = (state: StateType) => {
    return state.weather.weather[0].description;
}