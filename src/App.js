import logo from "./logo.svg";
import "./Styles/App.css";
import "bulma/css/bulma.min.css";

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <div classname="main">
      < Header />
      < HomePage />
      < Footer />
    </div>
  );
}

export default App;
