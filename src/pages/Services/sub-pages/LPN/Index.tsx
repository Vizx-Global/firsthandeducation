import React from 'react';
import Header from '@/components/HeaderTwo';
import Footer from '@/components/Footer';
import LPNPage from './components/LPNPage';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
           <LPNPage/>
        </main>
        <Footer/>

    </div>
  )
}
