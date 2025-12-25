import React from 'react'
import Header from '@/layout/Header';
import Footer from '@/components/Footer';
import RequestSub from './Components/RequestPage';

export default function Index() {
  return (
    <div>
        <Header/>
        <main>
            <RequestSub/>
        </main>
        <Footer/>
    </div>
  )
}
