import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'


export default function Layout({children}) {
  return (
    <div>
       <Navbar/>
       {children}
       <Banner/>
       <Footer/>
    </div>
  )
}
