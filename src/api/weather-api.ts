import { InitialStateType } from "../redux/weather-reducer";
import { instance } from "./api";

const API_KEY = "b5c165b4303d00a63f5d5dac48a3f800";

type GetWeatherRespType = InitialStateType;

export const weatherApi = {
  getWeather(city: string) {
    return instance
      .get<GetWeatherRespType>(`weather?q=${city}&appid=${API_KEY}`)
      .then((response) => response.data);
  },
};
