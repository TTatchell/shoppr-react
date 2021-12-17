export const ProductCard = (props) => {
    return (
        <section className='section'>
            <div className='card-image'>
                <figure className="image is-16by9">
                    <img src={props.product.image_url} alt={props.product.name}></img>
                </figure>
            </div>
            <div className='card'>
                <header class="card-header">
                    <p class="card-header-title is-centered">{props.product.name}</p>
                    <p class="card-header-title is-centered">${props.product.price}</p>
                </header>
                <footer class="card-footer">
                    <button class="card-footer-item button is-info">Add To Cart</button>
                </footer>
            </div>
        </section>
    );
};
