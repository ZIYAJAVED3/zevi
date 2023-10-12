import { FunctionComponent, memo, useMemo, type CSSProperties, useState } from "react";
import styles from "./Product.module.css";

type Property1DefaultType = {
  productImageUrl?: string;
  productDescription?: string;
  productPrice?: string;
  productSize?: string;
  productDimensionsImageUrl?: string;
  productReviews?: number;
};

const Property1Default: FunctionComponent<Property1DefaultType> = memo(
  ({
    productImageUrl,
    productDescription,
    productPrice,
    productSize,
    productDimensionsImageUrl,
    productReviews,
  }) => {

    const [isWhitelisted, setIsWhitelisted] = useState(false);

    return (
      <div className={styles.property1default} >
        <img className={styles.heartIcon} 
          alt="" 
          onClick={()=>setIsWhitelisted(!isWhitelisted)}
          src={isWhitelisted? '/heart1.svg' :'/heart.svg'} 
        />
        <img
          className={styles.property1defaultChild}
          alt=""
          src={productImageUrl}
        />
        <div className={styles.roundNeckCotton}>{productDescription}</div>
        <div className={styles.rs599Parent}>
          <div className={styles.rs599}>{productPrice}</div>
          <div className={styles.rs549}>{productSize}</div>
        </div>
        <div className={styles.parent}>
          <img
            className={styles.groupChild}
            alt=""
            src={productDimensionsImageUrl}
          />
          <div className={styles.div}>{`(${productReviews}) `}</div>
        </div>
        <div className={styles.viewProduct}>View Product</div>
      </div>
    );
  }
);

export default Property1Default;
