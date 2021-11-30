import logo from "./logo.svg";
import "./Styles/App.css";
import "bulma/css/bulma.min.css";

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { home, products, about, contact } from './Features/screen/screenSlice'

// Components
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {

  const screen = useSelector((state) => state.screen.value)
  const dispatch = useDispatch()

  return (
    <div classname='main'>
      < Header />
      {screen}
      < Footer />
    </div>
  )
}

export default App;
