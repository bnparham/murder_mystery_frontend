import React from 'react'
import BasicGrid from './components/Pages/MenuPage/MenuPageMain';
import AppLayout from './AppLayout';

import './style.css'
import CrimePageMain from './components/Pages/CrimePage/CrimePageMain';
import MenuPageMain from './components/Pages/MenuPage/MenuPageMain';

export default function App() {
  return (
    <AppLayout>
      {/* <MenuPageMain/> */}
      <CrimePageMain/>
    </AppLayout>
  )
}
