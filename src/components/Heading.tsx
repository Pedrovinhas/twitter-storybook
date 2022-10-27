import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({
    size = 'lg',
    children,
    asChild
} : HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    
    return (
        <>
        <Comp className={
            clsx('black font-bold font-sans', {
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
            })
        }>

            {children} 
        </Comp>
        </>
    )
}
