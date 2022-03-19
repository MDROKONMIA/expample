
import Navbar from './FrontEnd/components/Navbar';
import Homepage from './FrontEnd/pages/Homepage/Homepage';
import {Routes, Route } from 'react-router-dom';
import Footer from './FrontEnd/pages/Footer/Footer';
import { ScrollToTop } from './FrontEnd/components/ScrollToTop';
import { ShowProductsByCategory } from './FrontEnd/pages/Homepage/ShowProductsByCategory';

function App() {
  return ( 
      <div className='font-halal'>
        <Navbar />
        <Routes>
         <Route path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage />} />
        <Route path='/category/:slug' element={<ShowProductsByCategory/>}/>
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
     
  );
}

export default App;
