'use client'

import { ChefHat } from 'lucide-react' 
import Link from 'next/link'
import { useState } from 'react'


const HeaderNav = () => {

  const [openMenu, setopenMenu] = useState(false)

  return (

    <header className='fixed w-full bg-[#FFE2C0]'>

      <nav className='flex justify-between items-center p-4 max-w-7xl mx-auto relative' >

        <Link href="/" className="flex items-center" >
          <h1 className="text-3xl font-bold" >AxlDev</h1>
        </Link>

        <ChefHat size={32} className="block md:hidden cursor-pointer" onClick={() => setopenMenu(!openMenu) } />

        <ul className={`${openMenu ? 'flex' : 'hidden'} flex-col gap-4 p-4 absolute top-full left-0 w-full bg-[#FFE2C0] shadow-md
          md:flex md:flex-row md:gap-6 md:p-0 md:px-6 md:static md:w-auto md:shadow-none`}>

            <li>
                <Link href="/" className='text-xl md:text-md' >Home</Link>
            </li>

            <li>
                <Link href="/about" className='text-xl md:text-md' >Nosotros</Link>

            </li>

            <li>
                <Link href="/recetas" className='text-xl md:text-md' >Recetas</Link>

            </li>

        </ul>

      </nav>
    </header>
  )
}

export default HeaderNav
