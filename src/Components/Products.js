import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../Features/products/productsSlice.js";
import { useEffect } from "react";
import { LoadingBar } from './LoadingBar'
import { NoProductsError } from "./NoProductError.js";
import { ProductCard } from "./Products/ProductCard.js";
import { ProductHeader } from './Products/ProductHeader';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        console.log("Use effect starting");
        dispatch(loadproducts());
    }, [dispatch]);

    if (products.requestSucceeded === true) {
        const col1 = [];
        const col2 = [];

        products.list.map((product, index) => {
            if ((index & 1) === 0) {
                col1.push(product);
            }
            else {
                col2.push(product);
            }
        });

        return (
            <div>
                < ProductHeader />
                <section className='section'>
                    <div className="columns">
                        <div className="column">

                            {col1.map((product, index) => (
                                < ProductCard product={product} />
                            ))}
                        </div>
                        <div className="column">

                            {col2.map((product, index) => (
                                < ProductCard product={product} />
                            ))}
                        </div>

                    </div>
                </section>
            </div>
        );
    }
    else if (products.loading) {
        return (
            <div>
                < ProductHeader />
                < LoadingBar />
            </div>
        )
    }
    else {
        return (
            <div>
                < ProductHeader />
                < NoProductsError />
            </div>
        )
    }
};

export default Products;