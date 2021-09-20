// Types

import { ThunkAction } from "redux-thunk";
import { weatherApi } from "../api/weather-api";
import { InferValueType, StateType } from "./store";

export type InitialStateType = typeof initialState;

export type WeatherActionsType = ReturnType<InferValueType<typeof actions>>;

// State

const initialState = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: "US",
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: "Mountain View",
  cod: 200,
};

// Actions

const SET_WEATHER = "weather/weather/GET_WEATHER";

// Action Creators

const actions = {
  setWeather: (data: InitialStateType) =>
    ({ type: SET_WEATHER, data } as const),
};

// Reducer

const weatherReducer = (
  state: InitialStateType = initialState,
  action: WeatherActionsType
) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

// Thunks

export const getWeather = (city: string): ThunkAction<Promise<void>, StateType, unknown, WeatherActionsType> => {
    return async (dispatch) => {
        const response = await weatherApi.getWeather(city);
        if (response.cod === 200) {
            dispatch(actions.setWeather(response));
        }
    }
}

export default weatherReducer;
