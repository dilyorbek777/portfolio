import React from 'react'
import Header from '../components/Header';
import Skills from '../components/sections/Skills';
import MiniSection from '../components/sections/MIniSection'
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';
import MiniFooter from '../components/MiniFooter';


const Home = () => {
  return (
    <>
      <Header />
      <MiniSection />
      <Work />
      <Skills/>
      <Contact/>
      <MiniFooter/>
    </>

  )
};

export default Home;