import React from 'react'
import Link from 'next/link'
import { PiBugDroidFill } from "react-icons/pi";

const NavBar = () => {
  const links = [
    {label:'Dashboard', href:'/dashboard'},
    {label:'Issues', href:'/issues'}, 
  ]
  
  console.log('Links:', links) // Debug log

  return (
    <nav className='flex border-b mb-5 px-5 h-14 items-center bg-red-100'>
        <Link href="/" className="mr-6"><PiBugDroidFill /></Link>
        <ul className='flex list-none'>
            {links.map(link =>
                <li key={link.href} className='mr-6'>
                    <Link 
                        className='text-xl text-green-500 font-bold'
                        
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li> 
            )}
        </ul>
    </nav>
  )
}

export default NavBar