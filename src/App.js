
import Navbar, { NavItem } from './FrontEnd/components/Navbar';
import Homepage from './FrontEnd/pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import Footer from './FrontEnd/pages/Footer/Footer';
import { ScrollToTop } from './FrontEnd/components/ScrollToTop';
import { ShowProductsByCategory } from './FrontEnd/pages/Homepage/ShowProductsByCategory';
import { LoginForm } from './FrontEnd/pages/LoginForm';
import { RegistrationForm } from './FrontEnd/pages/RegistrationForm';
import { ContactPage } from './FrontEnd/pages/ContactPage';
import { PrivacyPolicy } from './FrontEnd/pages/PrivacyPolicy';
import SimpleBreadcrumbs from './FrontEnd/components/SimpleBreadcrumbs';
import { TermsConditions } from './FrontEnd/pages/TermsConditions';
import { Faqs } from './FrontEnd/pages/Faqs';
import { ShopPage } from './FrontEnd/pages/ShopPage';


function App() {
  return (
    <div className='font-halal'>
      <Navbar />
      <div className="bg-gray-200">
        <SimpleBreadcrumbs crumbs={NavItem} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/category/:slug' element={<ShowProductsByCategory />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsConditions />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path ="/shop" element={<ShopPage/>}/>
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </div>

  );
}

export default App;
