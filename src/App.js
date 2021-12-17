import "./Styles/App.css";
import "bulma/css/bulma.min.css";

// Redux
import { useSelector, useDispatch } from 'react-redux';
//import { getFromRails } from './Features/products/productsSlice'

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

import React, { useEffect } from 'react';

function App() {

  const screen = useSelector((state) => state.screen.value)

  return (
    <div className='main'>
      < Header />
      {screen}
      < Footer />
    </div>
  )
}

export default App;
