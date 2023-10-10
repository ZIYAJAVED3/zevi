import { FunctionComponent } from "react";
import Property1Default from "../components/Product";
import styles from "./ProductPage.module.css";

const WhenHoveringOnTheProduct: FunctionComponent = () => {
  return (
    <div className={styles.whenHoveringOnTheProduct}>
      <div className={styles.searchWrapper}>
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.searchResults}>Search Results</div>

      {/* Filter Section */}
      <div>
        <div className={styles.brandParent}>
          <div className={styles.brand}>BRAND</div>
          <img
            className={styles.angleRight1Icon}
            alt=""
            src="/angleright-1.svg"
          />
        </div>
        <div className={styles.priceRangeParent}>
          <div className={styles.priceRange}>price range</div>
          <img
            className={styles.angleRight1Icon}
            alt=""
            src="/angleright-11.svg"
          />
        </div>
        <div className={styles.ratingsParent}>
          <div className={styles.priceRange}>Ratings</div>
          <img
            className={styles.angleRight1Icon}
            alt=""
            src="/angleright-1.svg"
          />
        </div>
        <div className={styles.whenHoveringOnTheProductChild} />
        <div className={styles.whenHoveringOnTheProductItem} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.mango}>Mango</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild} />
          <div className={styles.mango}>under 500</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.mango}>1000 to 3000</div>
        </div>
        <img
          className={styles.whenHoveringOnTheProductInner}
          alt=""
          src="/group-24.svg"
        />
        <img className={styles.groupIcon} alt="" src="/group-25.svg" />
        <img
          className={styles.whenHoveringOnTheProductChild1}
          alt=""
          src="/group-26.svg"
        />
        <img
          className={styles.whenHoveringOnTheProductChild2}
          alt=""
          src="/group-27.svg"
        />
        <img
          className={styles.whenHoveringOnTheProductChild3}
          alt=""
          src="/group-28.svg"
        />
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
          <div className={styles.mango}>{`H&M`}</div>
        </div>
     </div>
      <Property1Default
        productImageUrl="/rectangle-10@2x.png"
        productDescription="Round neck cotton Tee"
        productPrice="Rs. 599"
        productSize="Rs.549"
        productDimensionsImageUrl="/group-11.svg"
        productThumbnailUrl="/heart1.svg"
        property1DefaultPosition="absolute"
        property1DefaultTop="14.5rem"
        property1DefaultLeft="23.19rem"
      />
    </div>
  );
};

export default WhenHoveringOnTheProduct;
