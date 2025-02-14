import React from 'react'
import { AskNavbar } from './components/AskNavbar'
import { RevilCard } from './components/RevilCard'

const AskitHeroSection = () => {
  return (
    <div className="mt-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      {/* <AskNavbar/> */}
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
      <RevilCard />
    </div>
  )
}

export default AskitHeroSection
