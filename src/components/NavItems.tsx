'use client'

import { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
            setActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, []);
    
    const isAnyOpen = activeIndex !== null;
    const navRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className='flex gap-4 h-full'>

        </div>
    )
}

export default NavItems