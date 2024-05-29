'use client'

import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'
import { useEffect,FC } from 'react'

interface PaymentStatusProps {
    orderEmail: string
    orderId: string
    isPaid: boolean
}

const PaymentStatus:FC<PaymentStatusProps> = ({
    orderEmail,
    orderId,
    isPaid,
}) => {
  return (
    <div>PaymentStatus</div>
  )
}

export default PaymentStatus