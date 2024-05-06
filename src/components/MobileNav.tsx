'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const pathname = usePathname()
  
    // whenever we click an item in the menu and navigate away, we want to close the menu
    useEffect(() => {
      setIsOpen(false)
    }, [pathname])
  
    // when we click the path we are currently on, we still want the mobile menu to close,
    // however we cant rely on the pathname for it because that won't change (we're already there)
    const closeOnCurrent = (href: string) => {
      if (pathname === href) {
        setIsOpen(false)
      }
    }

    // remove second scrollbar when mobile menu is open
    useEffect(() => {
        if (isOpen)
        document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
    }, [isOpen])

  if (!isOpen)
    return (
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
        <Menu className='h-6 w-6' aria-hidden='true' />
      </button>
    )

    return (
        <div>MobileNav</div>
    )
}

export default MobileNav