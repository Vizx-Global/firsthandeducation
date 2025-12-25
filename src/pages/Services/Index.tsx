import React from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import ServicePage from './Components/ServicePage'

export default function Index() {
  return (
    <div>
        <Header />
        <ServicePage />
        <Footer />
    </div>
  )
}
