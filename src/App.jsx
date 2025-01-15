import React from 'react';
import FullTree from './components/timelineTree/fullTree'
import Faq from './components/faq'
import RaskatechHeader from './components/RakshatechHeading'; 



export default function App() {
  return (
    <div className="min-h-screen bg-black flex justify-center flex-col">
      <RaskatechHeader/>
      <FullTree/>
      <Faq/>
    </div>
  )
}