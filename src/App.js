import React from 'react'
import BasicGrid from './components/Pages/MenuPage/MenuPageMain';
import AppLayout from './AppLayout';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import './style.css'
import CrimePageMain from './components/Pages/CrimePage/CrimePageMain';
import MenuPageMain from './components/Pages/MenuPage/MenuPageMain';
import CityPageMain from './components/Pages/CityPage/CityPageMain';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<MenuPageMain/>}>
          </Route>
          <Route path={'/crimepage'} element={<CrimePageMain/>}/>
          <Route path={'/citypage'} element={<CityPageMain />}/>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
