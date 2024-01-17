'use client'

import Link from 'next/link'
import React from 'react'
import Menu from './Menu'




const header = () => {
  return (
    <header>
      <nav >
        <div className='navbar justify-between bg-base-300'>
          <Link href="/" className="btn btn-ghost text-lg">
            Ecommerce
          </Link>
          
          <Menu/>

          
          
          
        </div>
      </nav>
    </header>
  )
}

export default header