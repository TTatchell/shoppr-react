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
        </div>
    )
}

export default Cart