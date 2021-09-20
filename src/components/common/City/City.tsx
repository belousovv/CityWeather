import React from 'react'
import styles from "./City.module.css";
import img from "../../../img/city.png";

type PropsType = {
    city: string;
}

const City: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.city}>
            <img className={styles.img} src={img} alt="city" />
            <p className={styles.description}>{props.city}</p>
        </div>
    )
}

export default City
