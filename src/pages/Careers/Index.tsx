import React from 'react'
import Header from '@/layout/Header';
import CareerPage from '@/pages/Careers/components/CareerPage';
import Footer from '@/layout/Footer';

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
