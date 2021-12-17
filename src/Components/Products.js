import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../Features/products/productsSlice.js";
import { useEffect } from "react";

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
            if ((index & 1) == 0) {
                col1.push(product);
            }
            else {
                col2.push(product);
            }
        });

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
                <section className='section'>
                    <div class="columns">
                        <div class="column">

                            {col1.map((product, index) => (

                                <section className='section'>

                                    <div className='card-image'>
                                        <figure className="image is-16by9">
                                            <img src={product.image_url} alt={product.name}></img>
                                        </figure>
                                    </div>
                                    <div className='card'>
                                        <header class="card-header">
                                        <p class="card-header-title is-centered">{product.name}</p>
                                        <p class="card-header-title is-centered">${product.price}</p>
                                        </header>
                                        <footer class="card-footer">
                                            <button class="card-footer-item button is-info">Add To Cart</button>
                                        </footer>
                                    </div>
                                </section>
                            ))}
                        </div>
                        <div class="column">

                            {col2.map((product, index) => (

                                <section className='section'>

                                    <div className='card-image'>
                                        <figure className="image is-16by9">
                                            <img src={product.image_url} alt={product.name}></img>
                                        </figure>
                                    </div>
                                    <div className='card'>
                                        <header class="card-header">
                                        <p class="card-header-title is-centered">{product.name}</p>
                                        <p class="card-header-title is-centered">${product.price}</p>
                                        </header>
                                        <footer class="card-footer">
                                            <button class="card-footer-item button is-info">Add To Cart</button>
                                        </footer>
                                    </div>
                                </section>
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
                    <progress class="progress is-large is-info" max="100">60%</progress>
                </section>
            </div>
        )
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