import React from 'react'
import Header from '@/components/HeaderTwo'
import EmployersPage from '@/pages/Employers/components/EmployersPage'
import Footer from '@/components/Footer'
export default function Index() {
  return (
    <div className='min-h-screen bg-background'>
        <Header/>
        <main>
            <EmployersPage/>
        </main>
        <Footer/>
    </div>
  )
}
