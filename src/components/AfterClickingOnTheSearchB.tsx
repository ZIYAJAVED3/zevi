import { FunctionComponent } from "react";
import styles from "./AfterClickingOnTheSearchB.module.css";

const AfterClickingOnTheSearchB: FunctionComponent = () => {
  return (
      <div className={styles.latestTrendsParent}>
        <div className={styles.latestTrends}>Latest Trends</div>
        {/* Latest trends product component */}
        <div className={styles.shirtWithPuffedSleevesParent}>
          <div className={styles.shirtWithPuffed}>
            Shirt with puffed sleeves
          </div>
          <img
            className={styles.unsplash0fhnxqyqgg4Icon}
            alt=""
            src="/unsplash0fhnxqyqgg4@2x.png"
          />
        </div>
        
        <div className={styles.popularSuggestions}>Popular suggestions</div>
        {/* Popular suggestions component */}
        <div className={styles.stripedShirtDress}>Striped shirt dress</div>

      </div>
  );
};

export default AfterClickingOnTheSearchB;
