import {faker} from '@faker-js/faker';

const MAX_RATING = 5;
const MIN_RATING = 1;

export type ProductType = {
  imgUrl:string,
  productName: string,
  currencyPrefix : string,
  originalPrice: string,
  discountedPrice: string,
  rating: number,
  noOfReviews: number,
  isFavourite: boolean,
  setDisplayActive: boolean,
}

const getProductData = () => {
  const productData : ProductType[] = [];

  for (let i = 0; i < 20; i++) {
    const imgUrl : string = faker.image.people(300, 500);
    const productName : string = faker.commerce.productName();
    // Hard-coded the value for demo purposes
    const currencyPrefix : string = 'Rs.';
    const originalPrice : string = faker.commerce.price(100, 5000);
    const discountedPrice : string =
      faker.commerce.price(100, Number(originalPrice));
    const rating =
      Math.round(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING);
    const noOfReviews = Math.floor(Math.random() * 1000 + 1);
    const isFavourite = false;
    const setDisplayActive = true;

    productData.push({
      imgUrl: imgUrl,
      productName: productName,
      currencyPrefix: currencyPrefix,
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
      rating: rating,
      noOfReviews: noOfReviews,
      isFavourite: isFavourite,
      setDisplayActive: setDisplayActive,
    });
  };

  return productData;
};

export const ProductData = getProductData();