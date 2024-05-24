'use client'

import {FC,useEffect, useState} from 'react'
// import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { cn, formatPrice } from '@/lib/utils'
import { PRODUCT_CATEGORIES } from '@/config'
import { Product } from '@/payload-types'

interface ProductListingProps {
    product: Product | null
    index: number
}

const ProductListing:FC<ProductListingProps> = ({
    product,
    index,
}) => {
  return (
    <div>ProductListing</div>
  )
}

export default ProductListing