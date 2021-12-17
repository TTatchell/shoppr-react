import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../Features/cart/cartSlice'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return (
        <div>
            <section className="hero is-info is-medium is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">Your Cart</h1>
                    </div>
                </div>
            </section>
            <section className="section">
                
                {cart.list.map((product, index) => (
                    <article class="message is-dark">
                        <div class="message-header">
                            <p>{product.name} - ${product.price}</p>
                            <button class="delete" aria-label="delete" onClick={() => dispatch(removeFromCart(product))}></button>
                        </div>
                        <div class="message-body">
                            {product.description}
                        </div>
                    </article>
                ))}
            </section>
            <section class="hero is-info">
                <div className="hero-body">
                    <h1 className="subtitle">Your Total: ${cart.total}</h1>
                </div>
            </section>
        </div>
    )
}

export default Cart