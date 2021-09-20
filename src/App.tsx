import styles from "./App.module.css";
import CityContainer from "./components/common/City/CityContainer";
import SearchContainer from "./components/common/Search/SearchContainer";
import WeatherContainer from "./components/common/Weather/WeatherContainer";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className="container">
        <div className={styles.content}>
          <SearchContainer />
          <WeatherContainer />
          <CityContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
