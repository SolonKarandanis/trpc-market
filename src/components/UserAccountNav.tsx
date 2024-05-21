'use client'

import { FC } from 'react'


import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'

interface Props{
    user:User
}

const UserAccountNav:FC<Props> = () => {
  return (
    <div>UserAccountNav</div>
  )
}

export default UserAccountNav