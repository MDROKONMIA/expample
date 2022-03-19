import logo from './logo.svg';
import './App.css';
import Navbar from './FrontEnd/components/Navbar';
import Homepage from './FrontEnd/pages/Homepage/Homepage';
import { BrowserRouter } from 'react-router-dom';
import Footer from './FrontEnd/pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Homepage />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
