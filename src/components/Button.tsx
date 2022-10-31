import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    variant?: 'primary' | 'secondary'
    size: 'big' | 'medium' | 'small' | 'tiny'
}

export function Button({ children, asChild, variant = 'primary', size} : ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp className={
            clsx(
                {
                    'py-4 px-24': size === 'big',
                    'py-3 px-24': size === 'medium',
                    'py-2 px-24': size === 'small',
                    'py-2 px-6' : size === 'tiny',

                   'text-white text-md font-sans font-bold py-4 px-24 bg-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white'
                    : variant === 'primary',
                     'text-primary-blue text-md font-sans font-bold py-2 px-24 bg-transparent border-[1px] border-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white dark:hover:bg-white dark:hover:bg-opacity-5  '
                    : variant === 'secondary'
                }
                // 'text-white text-md font-sans font-bold py-4 px-24 bg-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white', 
            )
        }>
            {children} 
        </Comp>
    )
}
