import {
  Route,
  Routes,
} from "react-router-dom";

// STYLED
import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/global';

// VIEWS
import HomeView from "./views/home/HomeView";
import MenuContainer from "./components/menu/MenuContainer";
import ProductView from "./views/product/ProductView";
import CartView from "./views/cart/CartView";
import AboutView from "./views/about/AboutView";


function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <header>
          <MenuContainer />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/about" element={<AboutView/>}/>
            <Route path="/shop/:id" element={<ProductView/>}/>
            <Route path="/cart" element={<CartView/>}/>
          </Routes>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App

