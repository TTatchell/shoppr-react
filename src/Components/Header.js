import logo from "../Images/Shoppr.png";

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { home, products, about, contact } from '../Features/screen/screenSlice'

const Header = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" onClick={() => dispatch(home())}>
            <img src={logo} width="112" height="28" alt="Shoppr Logo"></img>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => dispatch(home())}>Home</a>

            <a className="navbar-item" onClick={() => dispatch(products())}>Products</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item" onClick={() => dispatch(about())}>About</a>
                <a className="navbar-item" onClick={() => dispatch(contact())}>Contact</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>Cart: <span>{count}</span></strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
