import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../store/products";
import { useEffect } from "react";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.list);

    useEffect(() => {
        console.log("Use effect starting");
        dispatch(loadproducts());
    }, [dispatch]);

    if (products) {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1 class="subtitle">There are no products to display at this time</h1>
            </div>
        )
    }
};

export default Products;