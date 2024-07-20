import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5' >
        <img src='/logo(3).jpg' width={110} height={100}/>
        <Button > SignIn</Button>
    </div>
  )
}

export default Header