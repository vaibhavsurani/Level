import { useState } from 'react'
import React, { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from "react-router-dom";


import NavBar from './components/navbar.jsx'
import Header from './components/header.jsx'
import Tm from './components/tm.jsx'
import Journey from './components/journey.jsx'
import Play from './components/video.jsx'
import Asia from './components/asia.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'



function App() {
  
  const navigation = document.getElementById('navigation');
    useEffect(() => {
      const onScroll = () => {
              if (window.scrollY > 20) {
              navigation.classList.add('h-[80px]');
              navigation.classList.remove('h-[120px]');

              } else {
              navigation.classList.remove('h-[80px]');
              navigation.classList.add('h-[120px]');
              }
          };
          window.addEventListener('scroll', onScroll);
          
          
    }, []);
    

  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <Header />
        <Tm />
        <Journey />
        <Play />
        <Asia />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
