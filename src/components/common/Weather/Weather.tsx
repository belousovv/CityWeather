import React from "react";
import styles from "./Weather.module.css";

type PropsType = {
  temp: number;
  description: string;
};

const Weather: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.weather}>
        <p className={styles.temp}>{`${props.temp}ºC`}</p>
        <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default Weather;
