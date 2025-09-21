'use client' 
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PiBugDroidFill } from "react-icons/pi";
import classnames from 'classnames';

const NavBar = () => {
  const pathname = usePathname()
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
                        className={classnames(
                            'text-xl font-bold transition-colors duration-200',
                            {
                                'text-blue-600': pathname === link.href,
                                'text-green-500 hover:text-green-700': pathname !== link.href
                            }
                        )}
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