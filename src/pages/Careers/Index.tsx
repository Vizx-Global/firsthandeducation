import React from 'react'
import Header from '@/components/HeaderTwo';
import CareerPage from './components/CareerPage';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
            <CareerPage/>
        </main>
        <Footer/>
    </div>
  )
}
