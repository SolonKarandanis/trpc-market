'use client'

import {FC} from 'react'
import { TQueryValidator } from '@/lib/validators/query-validator'
import { Product } from '@/payload-types'
import { trpc } from '@/trpc/client'
import Link from 'next/link'

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
    query: TQueryValidator
}
  
const FALLBACK_LIMIT = 4

const ProductReel:FC<ProductReelProps> = ({
    query,
    title,
    href,
    subtitle
}) => {
  return (
    <div>ProductReel</div>
  )
}

export default ProductReel