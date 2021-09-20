import styles from "./App.module.css";
import Search from "./components/common/Search/Search";
import Weather from "./components/common/Weather/Weather";

const App: React.FC = (props) => {
  return <div className={styles.app}>
    <div className="container">
      <Search />
      <Weather />
    </div>
  </div>;
};

export default App;