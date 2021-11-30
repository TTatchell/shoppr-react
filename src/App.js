import logo from "./logo.svg";
import "./Styles/App.css";
import "bulma/css/bulma.min.css";

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Components
import Header from './Components/Header';
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
