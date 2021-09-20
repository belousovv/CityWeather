import { StateType } from "./store";

export const selectTemp = (state: StateType) => {
    if (state.weather.main.temp) {
        return Math.floor(state.weather.main.temp - 273);
    } else {
        return 0;
    }
}

export const selectDescription = (state: StateType) => {
    return state.weather.weather[0].description;
}