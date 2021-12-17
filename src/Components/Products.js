import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../Features/products/productsSlice.js";
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
                <div>
                    <section className="hero is-info is-medium is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <h1 className="title">Products</h1>
                            </div>
                        </div>
                    </section>
                </div>
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
                <div>
                    <section className="hero is-info is-medium is-bold">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <h1 className="title">Products</h1>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="section">

                    <article className="message is-warning">
                        <div className="message-header">
                            <p>Hmm. Something isn't right</p>
                        </div>
                        <div className="message-body">
                            At this time, there are no products to display. Try refreshing the page.
                        </div>
                    </article>
                </section>
            </div>
        )
    }
};

export default Products;