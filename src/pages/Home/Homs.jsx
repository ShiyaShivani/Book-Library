import React from 'react';
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom';

const Homs = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Homs