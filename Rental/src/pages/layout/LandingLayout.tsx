import React from 'react'
import Navbar from '../../components/landing/Navbar'
import CustomFooter from '../../components/landing/CustomFooter'
import { Outlet } from 'react-router'

const LandingLayout = () => {
  return (
    <>
    <Navbar/>
        <Outlet/>
    <CustomFooter/>
    </>
  )
}

export default LandingLayout
