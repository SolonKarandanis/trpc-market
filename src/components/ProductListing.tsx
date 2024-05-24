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
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true)
        }, index * 75)

        return () => clearTimeout(timer)
    }, [index])

    if (!product || !isVisible) return <ProductPlaceholder />

    const label = PRODUCT_CATEGORIES.find(
        ({ value }) => value === product.category
    )?.label
    
    const validUrls = product.images
        .map(({ image }) =>
            typeof image === 'string' ? image : image.url
        )
        .filter(Boolean) as string[]

    if (isVisible && product){
        return (
            <Link
                className={cn(
                'invisible h-full w-full cursor-pointer group/main',
                {
                    'visible animate-in fade-in-5': isVisible,
                }
                )}
                href={`/product/${product.id}`}>

            </Link> 
        )
    }
}

const ProductPlaceholder = () => {
    return (
      <div className='flex flex-col w-full'>
        <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
          {/* <Skeleton className='h-full w-full' /> */}
        </div>
        {/* <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
        <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
        <Skeleton className='mt-2 w-12 h-4 rounded-lg' /> */}
      </div>
    )
  }

export default ProductListing