import React from 'react'
import Header from '@/components/HeaderTwo'
import Footer from '@/components/Footer';
import NursesPage from "./components/NursesPage";

export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
            <NursesPage/>
        </main>
        <Footer/>

    </div>
  )
}
