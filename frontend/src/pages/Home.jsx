import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policies from '../components/Policies'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller />
      <Policies/>
      <Subscribe/>
      

    </div>
  )
}

export default Home