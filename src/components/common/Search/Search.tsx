import React from "react";
import styles from "./Search.module.css";

// Types

type PropsType = {
  register: any;
  handleSubmit: any;
  onSubmitCity: any;
}

// Component

const Search: React.FC<PropsType> = (props) => {

  return (
    <form className={styles.search} onSubmit={props.handleSubmit(props.onSubmitCity)}>
        <input
          className={styles.input}
          type="text"
          title="city"
          {...props.register("search", {required: true})}
          placeholder="city"
        />
    </form>
  );
};
export default Search;