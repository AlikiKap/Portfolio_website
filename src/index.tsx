import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cv from './pages/Cv';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/cv" element={<Cv/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
