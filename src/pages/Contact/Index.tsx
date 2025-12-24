import React from 'react'
import Header from '@/components/HeaderTwo';
import Footer from '@/components/Footer';
import ContactPage from './component/ContactPage';

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
        <ContactPage/>
        </main>
        <Footer/>

    </div>
  )
}
