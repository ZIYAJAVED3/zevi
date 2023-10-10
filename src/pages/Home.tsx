import { FunctionComponent } from "react";
import styles from "./Home.module.css";
import SearchSuggestions from "../components/Suggestions"
const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.searchParent}>
        <input className={styles.search} placeholder="Search"/>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
      </div>

      <SearchSuggestions />
    </div>
  );
};

export default Home;
