import { Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import './css/header.css';
import './css/footer.css';
import './css/App.css';
import './css/reset.css';
import './css/shop.css';
import './css/allLIst.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main';
import Detail from './components/Detail';
import Shop from './components/Shop';
//npm install react-router-dom@6으로 설치
//index.js에 <BrowserRouter>로 <App/>감싸고
//index.js에 import { BrowserRouter } from "react-router-dom";

import productData from './components/productData.js';
import { useState } from 'react';
function App() {
  let [data] = useState(productData);

  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path='/' element={<Main data={data} />}></Route>
        <Route path='/Shop' element={<Shop data={data} />}></Route>
        {/* <Route path='/About' element={<div>어바웃</div>}></Route>
        <Route path='/Detail' element={<div>디테일</div>}></Route>
        <Route path='*' element={<div>404</div>}></Route>  */}
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
