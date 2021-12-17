import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../Features/cart/cartSlice'

export const ProductCard = (props) => {
    const count = useSelector((state) => state.cart.count)
    const dispatch = useDispatch()

    return (
        <section className='section'>
            <div className='card'>
                <div className='card-image'>
                    <figure className="image is-16by9">
                        <img src={props.product.image_url} alt={props.product.name}></img>
                    </figure>
                </div>
                <header className="card-header">
                    <p className="card-header-title is-centered">{props.product.name}</p>
                    <p className="card-header-title is-centered">${props.product.price}</p>
                </header>
                <footer className="card-footer">
                    <button 
                    className="card-footer-item button is-info"
                    onClick={() => dispatch(addToCart(props.product))}
                    >Add To Cart</button>
                </footer>
            </div>
        </section>
    );
};
