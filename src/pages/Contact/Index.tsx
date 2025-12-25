import React from 'react'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import ContactPage from '@/pages/Contact/component/ContactPage';

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
