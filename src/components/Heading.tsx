import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({
    size = 'lg',
    children,
    asChild,
    className
} : HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    
    return (
        <>
        <Comp className={
            clsx('black font-bold font-sans', {
                'text-lg mt-1': size === 'lg',
                'text-xl': size === 'xl',
            },
            className
            )
            
        }
        >

            {children} 
        </Comp>
        </>
    )
}
