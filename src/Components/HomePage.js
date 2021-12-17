import { useDispatch, useSelector } from "react-redux";
import { loadRandomProduct } from "../Features/products/randomProductSlice";
import { useEffect } from "react";
import { NoProductsError } from "./NoProductError";

import { LoadingBar } from "./LoadingBar";
import { HomePageHeader } from "./HomePage/HomePageHeader";
import { FeaturedProduct } from "./HomePage/FeaturedProduct";

const HomePage = () => {
  const dispatch = useDispatch();
  const featuredProduct = useSelector((state) => state.randomProduct);

  useEffect(() => {
    console.log("Use effect starting");
    dispatch(loadRandomProduct());
  }, [dispatch]);

  if (featuredProduct.requestSucceeded === true) {

    return (
      <div>
        < HomePageHeader />
        < FeaturedProduct featuredProduct={featuredProduct} />
      </div>
    );
  }
  else if (featuredProduct.loading) {
    return (
      <div>
        < HomePageHeader />
        < LoadingBar />
      </div>
    )
  }
  else {
    return (
      <div>
        < HomePageHeader />
        < NoProductsError />
      </div>
    )
  }
};
export default HomePage;
