import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[55px] text-center mt-16'> <span className='text-[#E8311E]'> Uncover your next journey with AI</span>, tailored just for you</h1>
      <p className='text-xl text-gray-500 text-center'>Your dedicated travel planner and curator, crafting personalized itineraries to suit your interests and budget</p>
      <Link to={'/create-trip'}>
        <Button>Get Started, Free!</Button>
      </Link>
    </div>
  )
}

export default Hero