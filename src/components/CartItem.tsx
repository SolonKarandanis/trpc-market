import {FC} from 'react'
import { PRODUCT_CATEGORIES } from '@/config'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/utils'
import { Product } from '@/payload-types'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'

interface Props{
  product: Product;
}


const CartItem:FC<Props> = ({
  product
}) => {
  const { image } = product.images[0]
  const { removeItem } = useCart()
  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  return (
    <div className='space-y-3 py-2'>
      ss
    </div>
  )
}

export default CartItem