'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface Props {
    category: Category
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
  }

const NavItem:FC<Props> = ({
    isAnyOpen,
    category,
    handleOpen,
    close,
    isOpen,
}) => {
  return (
    <div>NavItem</div>
  )
}

export default NavItem