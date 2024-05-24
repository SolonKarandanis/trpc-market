'use client'

import { useEffect, useState,FC } from 'react'
import { Button } from './ui/button'
// import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'

interface Props{
    product: Product;
}

const AddToCartButton:FC<Props> = ({product}) => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsSuccess(false)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [isSuccess])
    return (
        <div>AddToCartButton</div>
    )
}

export default AddToCartButton