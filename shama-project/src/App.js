import React from 'react';
import Main from './components/Main';
import {BrowserRouter, Routes, Route, Router}  from "react-router-dom";
import './style/normalize.css'
import './style/reset.css'
import NotFound from './components/NotFound';


const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/:id" element={<Main/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;