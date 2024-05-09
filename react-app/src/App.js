import About from "./components/about/About";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Services from "./components/services/Services";
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <Promo/>
      <About/>
      <Brands/>
      <Services/>
      <Contacts/>
      <Footer/>
    </>
    
);
}

export default App;
