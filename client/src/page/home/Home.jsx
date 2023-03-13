import React from 'react'
import "./home.css"
import Navbar from "../../component/navbar/Navbar"
import Header from '../../component/header/Header'
import Featured from '../../component/fetaured/Featured'
import PropertyList from '../../component/propertylist/PropertyList'
import FeaturedProperty from '../../component/featuredProperty/FeaturedProperty'
import MailList from '../../component/mailList/MailList'
import Footer from '../../component/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
