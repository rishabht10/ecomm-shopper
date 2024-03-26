import Navbar from './comps/Navbar/Navbar.jsx';
import Footer from './comps/Footer/Footer.jsx';
import './App.css';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignUp } from './pages/LoginSignUp.jsx';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}></Route >

            <Route path='/mens' element={<ShopCategory category='men'/>} ></Route>
            <Route path='/womens' element={<ShopCategory category='women'/>}></Route >
            <Route path='/kids' element={<ShopCategory category='kid'/>}></Route >
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
