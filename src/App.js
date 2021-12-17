import "./Styles/App.css";
import "bulma/css/bulma.min.css";

// Redux
import { useSelector } from 'react-redux';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer';

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
