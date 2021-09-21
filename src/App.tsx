import styles from "./App.module.css";
import CityContainer from "./components/common/City/CityContainer";
import Error from "./components/common/Error/Error";
import SearchContainer from "./components/common/Search/SearchContainer";
import WeatherContainer from "./components/common/Weather/WeatherContainer";

// Types

type Mstp = {
  isError: boolean;
};

// Component

const App: React.FC<Mstp> = (props) => {
  return (
    <div className={styles.app}>
      <div className="container">
        <div className={styles.content}>
          <SearchContainer />
          {props.isError ? (
            <Error />
          ) : (
            <>
              <WeatherContainer />
              <CityContainer />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
