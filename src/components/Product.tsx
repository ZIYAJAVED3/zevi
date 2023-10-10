import { FunctionComponent, memo, useMemo, type CSSProperties, useState } from "react";
import styles from "./Product.module.css";

type Property1DefaultType = {
  productImageUrl?: string;
  productDescription?: string;
  productPrice?: string;
  productSize?: string;
  productDimensionsImageUrl?: string;
  productThumbnailUrl?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default: FunctionComponent<Property1DefaultType> = memo(
  ({
    productImageUrl,
    productDescription,
    productPrice,
    productSize,
    productDimensionsImageUrl,
    productThumbnailUrl,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  }) => {
    const property1DefaultStyle: CSSProperties = useMemo(() => {
      return {
        position: property1DefaultPosition,
        top: property1DefaultTop,
        left: property1DefaultLeft,
      };
    }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

    const [isWhitelisted, setIsWhitelisted] = useState(false);

    return (
      <div className={styles.property1default} style={property1DefaultStyle}>
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
          <div className={styles.div}>{`(210) `}</div>
          <img
            className={styles.groupChild}
            alt=""
            src={productDimensionsImageUrl}
          />
        </div>
        <img className={styles.heartIcon} 
          alt="" 
          onClick={()=>setIsWhitelisted(!isWhitelisted)}
          src={isWhitelisted? '/heart1.svg' :'/heart.svg'} 
        />
        <div className={styles.property1variant2Item} />
        <div className={styles.viewProduct}>View Product</div>
      </div>
    );
  }
);

export default Property1Default;
