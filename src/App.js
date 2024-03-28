import Navbar from './comps/Navbar/Navbar.jsx';
import Footer from './comps/Footer/Footer.jsx';
import './App.css';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignUp } from './pages/LoginSignUp.jsx';
import men_banner from './comps/assets/banner_mens.png'
import women_banner from './comps/assets/banner_women.png'
import kid_banner from './comps/assets/banner_kids.png'




function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}></Route >

            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>} ></Route>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}></Route >
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route >
            <Route path='/product' element={<Product/>}></Route >
            <Route path='/productId' element={<Product/>}></Route >
            <Route path='/cart' element={<Cart/>}></Route >
            <Route path='/login' element={<LoginSignUp/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
