import React from 'react'
import Header from '@/layout/Header';
import Footer from '@/components/Footer';
import MainServicePage from './components/MainServicePage';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
         <MainServicePage/>
        </main>
        <Footer/>
    </div>
  )
}
