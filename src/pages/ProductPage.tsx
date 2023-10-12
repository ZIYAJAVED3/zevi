import { FunctionComponent } from "react";
import Property1Default from "../components/Product";
import styles from "./ProductPage.module.css";
import { ProductData } from "../fakerData";

const WhenHoveringOnTheProduct: FunctionComponent = () => {
  return (
    <div className={styles.whenHoveringOnTheProduct}>
      <div className={styles.searchWrapper}>
      <input className={styles.search} placeholder="Search"/>
        <img className={styles.searchIcon} alt="" src="/search1.svg" />
      </div>
      <div className={styles.searchResults}>Search Results</div>
        <div className={styles.results}>
          {/* Filter Section */}
          <div style={{width:'20rem',height:'20rem'}}>
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
        <div className={styles.productResults}>
          {ProductData.map((product)=>{
              return (
                <Property1Default
                productImageUrl={product.imgUrl}
                productDescription={product.productName}
                productPrice={product.originalPrice}
                productSize={product.discountedPrice}
                productDimensionsImageUrl="/group-11.svg"
                productReviews={product.rating}
              />)
            })}
        </div>
      </div>
    </div>
  );
};

export default WhenHoveringOnTheProduct;
