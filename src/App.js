import logo from "./logo.svg";
import "./Styles/App.css";
import "bulma/css/bulma.min.css";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getFromRails } from './Features/products/productsSlice'

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

import React, { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFromRails())
  }, []);

  const screen = useSelector((state) => state.screen.value)

  return (
    <div classname='main'>
      < Header />
      {screen}
      < Footer />
    </div>
  )
}

export default App;
