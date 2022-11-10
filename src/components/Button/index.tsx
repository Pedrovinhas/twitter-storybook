import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
    variant?: 'primary' | 'secondary' | 'terciary' | 'quaternary'
    size: 'big' | 'medium' | 'small' | 'tiny'
    className?: string
    onClick?: () => void;
    disabled?: boolean;
    type?: any
}

export function Button({ children, asChild, variant = 'primary', size, className, onClick, disabled = false} : ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return (
        <Comp onClick={onClick} className={
            clsx(
                {
                    'py-4 px-24': size === 'big',
                    'py-3 px-24': size === 'medium',
                    'py-2 px-24': size === 'small',
                    'py-2 px-6' : size === 'tiny',

                    'dark:bg-dark-6 bg-dark-6 disabled cursor-not-allowed' : disabled === true,

                   'text-white text-md font-sans font-bold py-4 px-24 bg-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white'
                    : variant === 'primary',
                     'text-primary-blue text-md font-sans font-bold py-2 px-24 bg-transparent border-[1px] border-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white dark:hover:bg-white dark:hover:bg-opacity-5  '
                    : variant === 'secondary',

                    'text-white text-md font-sans font-bold py-2 px-24 border-[1px] border-white border-opacity-50 rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white dark:hover:bg-white dark:hover:bg-opacity-5  '
                    : variant === 'terciary',

                    'text-black text-md font-sans font-bold py-2 px-24 bg-white rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-black dark:hover:bg-white dark:hover:bg-opacity-80  '
                    : variant === 'quaternary'
                },
                className
                // 'text-white text-md font-sans font-bold py-4 px-24 bg-primary-blue rounded-full transition-colors hover:bg-opacity-90 focus:ring-2 ring-white', 
            )
        }>
            {children} 
        </Comp>
    )
}
