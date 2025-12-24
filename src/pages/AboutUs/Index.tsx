import React from 'react'
import Header from '@/layout/Header';
import Footer from '@/components/Footer';
import AboutUsPage from './components/AboutUs';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
          <Header/>
        <main>
             <AboutUsPage/>
        </main>
        <Footer/>

    </div>
  )
}
