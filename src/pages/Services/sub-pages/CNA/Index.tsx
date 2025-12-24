import React from 'react';
import Header from '@/components/HeaderTwo';
import Footer from '@/components/Footer';
import CNApage from "./components/CNApage";

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
            <CNApage/>
        </main>
        <Footer/>

    </div>
  )
}
