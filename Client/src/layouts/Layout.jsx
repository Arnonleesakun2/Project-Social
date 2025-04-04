import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <main  className='maincontainer'>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default Layout
