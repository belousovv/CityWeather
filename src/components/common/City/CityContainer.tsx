import React from "react";
import { connect } from "react-redux";
import { selectCity } from "../../../redux/search-selector";
import { StateType } from "../../../redux/store";
import City from "./City";

// Types

type PropsType = {
  city: string | null;
};

type MapDispatchType = {};

type OwnProps = {};

// Component

const CityContainer: React.FC<PropsType> = (props) => {
  return <>{props.city && <City city={props.city} />}</>;
};

const mapStateToProps = (state: StateType) => ({
  city: selectCity(state),
});

export default connect<PropsType, MapDispatchType, OwnProps, StateType>(
  mapStateToProps,
  {}
)(CityContainer);
