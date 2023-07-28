import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import DropDown from '../components/DropDown'




const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hiddenMenu =() => {
      if(window.innerWidth >768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hiddenMenu)
    return () => {
      window.removeEventListener('resize',hiddenMenu)
    }
  })
  return (
    <>

<Navbar toggle={toggle}></Navbar>
<DropDown isOpen={isOpen} toggle={toggle} />
      
      
      <Outlet />
      
      <Footer></Footer>
    </>
  )
}

export default Main