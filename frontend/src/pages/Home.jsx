import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Feature from './Feature'
import FAQ from './FAQ'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <Banner/>
      <Feature  />
      <FAQ/>
      
    </div>
  )
}

export default Home
