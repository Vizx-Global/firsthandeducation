import React from 'react'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import ReferralPage from './Components/ReferralsPage';

export default function Index() {
  return (
    <div>
        <Header />
        <ReferralPage />
        <Footer />
    </div>
  )
}
