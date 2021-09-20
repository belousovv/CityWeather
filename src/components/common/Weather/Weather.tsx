import React from "react";
import { connect } from "react-redux";
import { selectCity } from "../../../redux/search-selector";
import { StateType } from "../../../redux/store";
import { selectTemp } from "../../../redux/weather-selector";
import styles from "./Weather.module.css";

// Types

type MapStateType = {
  city: string | null;
  temp: number | null;
};

type MapDispatchType = {};

type OwnType = {};

type PropsType = MapStateType & MapDispatchType & OwnType;

// Component

const Weather: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.weather}>
      {props.city && (
        <>
          <h4 className={styles.title}>{props.city}</h4>
          <p className={styles.temp}>{`${props.temp}ºC`}</p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  city: selectCity(state),
  temp: selectTemp(state),
});

export default connect<MapStateType, MapDispatchType, OwnType, StateType>(
  mapStateToProps,
  {}
)(Weather);
