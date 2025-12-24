import React from 'react'
import Header from '@/components/HeaderTwo';
import MedicalStaffingPage from './components/MedicalStaffing';
import Footer from '@/components/Footer';
export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
            <MedicalStaffingPage/>
        </main>
        <Footer/>
    </div>
  )
}
