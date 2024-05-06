import { cn } from '@/lib/utils';
import {FC, ReactNode} from 'react'

interface Props{
    className?:string;
    children: ReactNode;
}

const MaxWidthWrapper:FC<Props> = ({className,children}) => {
  return (
    <div className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
    )}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper