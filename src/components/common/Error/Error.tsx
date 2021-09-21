import React from 'react'
import styles from "./Error.module.css";

const Error: React.FC = () => {
    return (
        <div className={styles.error}>
            <p className={styles.text}>...something went wrong</p>
        </div>
    )
}

export default Error
