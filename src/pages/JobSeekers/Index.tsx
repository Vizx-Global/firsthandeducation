import React from 'react'
import JobSeekersPage from './components/JobSeekersPage';
import Header from '@/components/HeaderTwo';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
        <Header/>
        <main>
            <JobSeekersPage/>
        </main>
        <Footer/>

    </div>
  )
}
