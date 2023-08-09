import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route, Link, useLocation, useNavigatem, Outlet } from 'react-router-dom'
// npm install react-router-dom@6 으로설치
// index.js에 < BrowserRouter >로 <app/>감싸고 
// index.js에 import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
