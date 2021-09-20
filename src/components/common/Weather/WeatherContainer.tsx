import React from "react";
import { connect } from "react-redux";
import { selectCity } from "../../../redux/search-selector";
import { StateType } from "../../../redux/store";
import { selectDescription, selectTemp } from "../../../redux/weather-selector";
import Weather from "./Weather";

// Types

type MapStateType = {
  city: string | null;
  temp: number;
  description: string;
};

type MapDispatchType = {};

type OwnType = {};

type PropsType = MapStateType & MapDispatchType & OwnType;

// Component

const WeatherContainer: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.city && props.temp && (
        <Weather temp={props.temp} description={props.description}/>
      )}
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  city: selectCity(state),
  temp: selectTemp(state),
  description: selectDescription(state),
});

export default connect<MapStateType, MapDispatchType, OwnType, StateType>(
  mapStateToProps,
  {}
)(WeatherContainer);
