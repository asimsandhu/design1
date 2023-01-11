import React from 'react'
import { BrowserRouter as  Route, Routes } from "react-router-dom";
import Header from '../components/Header';

import Page1 from '../pages/page1';
import Page2 from '../pages/Page2';



function Router() {
  return (

    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="/page1" element={ <Page1/> } />
    </Route>
    <Route path="/page2" element={ <Page2 /> } />
    </Routes>

  )
}

export default Router 