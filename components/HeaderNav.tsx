import Link from 'next/link'


const HeaderNav = () => {

  return (

    <header className='fixed w-full bg-[#FFE2C0]'>

      <nav>

        <ul className='flex flex-1 justify-between px-10 py-4 text-[#26251B] font-semibold' >

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
