import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { actions, SearchActionsType } from "../../../redux/search-reducer";
import { StateType } from "../../../redux/store";
import { getWeather, WeatherActionsType } from "../../../redux/weather-reducer";
import styles from "./Search.module.css";

// Types

type MapStateType = {};

type MapDispatchType = {
  setCity: (city: string) => void;
  getWeather: (city: string) => void;
};

type OwnType = {};

type PropsType = MapStateType & MapDispatchType & OwnType;

// Component

const Search: React.FC<PropsType> = (props) => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = () => {
    props.setCity(watch("search"));
    props.getWeather(watch("search"));
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit(onSubmit)}>
      {/* <label> */}
        <input
          className={styles.input}
          type="text"
          title="city"
          {...register("search")}
          placeholder="city"
        />
      {/* </label> */}
    </form>
  );
};
const mapDispatchToProps = (
  dispatch: Dispatch<SearchActionsType> &
    ThunkDispatch<StateType, {}, WeatherActionsType>
) => ({
  setCity: (city: string) => {
    dispatch(actions.setCity(city));
  },
  getWeather: (city: string) => {
    dispatch(getWeather(city));
  },
});

export default connect<MapStateType, MapDispatchType, OwnType>(
  null,
  mapDispatchToProps
)(Search);
